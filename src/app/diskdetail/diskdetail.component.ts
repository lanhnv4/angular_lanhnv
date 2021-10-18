import { Dish } from './../shared/dish';
import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Location } from '@angular/common';
import { switchMap } from 'rxjs/operators';
import { Comment } from '../shared/comment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-diskdetail',
  templateUrl: './diskdetail.component.html',
  styleUrls: ['./diskdetail.component.scss']
})
export class DiskdetailComponent implements OnInit {

  @ViewChild('cform') commentFormDirective;
  commentForm: FormGroup;
  comment: Comment;

  @Input()
  dish: Dish

  dishIds: string[];
  prev: string;
  next: string;

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location,
    private fb: FormBuilder,
    @Inject('baseURL') private baseURL) { 
      this.createForm();
    }

    formErrors = {
      'author': '',
      'comment': ''
    };
  
    validationMessages = {
      'author': {
        'required':      'Your Name is required.',
        'minlength':     'Your Name must be at least 2 characters long.',
      },
      'comment': {
        'required':      'Comment is required.',
        'minlength':     'Comment must be at least 2 characters long.',
      }
    };
  
    ngOnInit() {
      this.dishservice.getDishIds().subscribe(dishIds => this.dishIds = dishIds);
      this.route.params.pipe(switchMap((params: Params) => this.dishservice.getDish(params['id'])))
      .subscribe(dish => { this.dish = dish; this.setPrevNext(dish.id); });
    }
  
    setPrevNext(dishId: string) {
      const index = this.dishIds.indexOf(dishId);
      this.prev = this.dishIds[(this.dishIds.length + index - 1) % this.dishIds.length];
      this.next = this.dishIds[(this.dishIds.length + index + 1) % this.dishIds.length];
    }

    goBack(): void {
    this.location.back();
  }

  createForm() : void {
    this.commentForm = this.fb.group({
      author: ['', [Validators.required, Validators.minLength(2)]],
      comment: ['', [Validators.required, Validators.minLength(2)]],
      rating: 5,
      date: ''
    });
    this.commentForm.valueChanges.subscribe(data => this.onValueChanged(data));
    this.onValueChanged(); // reset all messages
  }

  onSubmit() {
    this.comment = this.commentForm.value;
    this.comment.date = new Date().toISOString();
    this.dish.comments.push(this.comment);
    this.commentForm.reset({
      author: '',
      comment: '',
      rating: 5,
      date:''  
    });
    this.commentFormDirective.resetForm();
  }

  onValueChanged(data?: any) {
    if (!this.commentForm) { return; }
    const form = this.commentForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }
  
}
