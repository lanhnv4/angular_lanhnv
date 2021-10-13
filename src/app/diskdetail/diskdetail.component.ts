import { Dish } from './../shared/dish';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DishService } from '../services/dish.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-diskdetail',
  templateUrl: './diskdetail.component.html',
  styleUrls: ['./diskdetail.component.scss']
})
export class DiskdetailComponent implements OnInit {

  @Input()
  dish: Dish

  constructor(private dishservice: DishService,
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.dish = this.dishservice.getDish(id);
  }
 
  goBack(): void {
    this.location.back();
  }
  
}
