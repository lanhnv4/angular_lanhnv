import { Dish } from './../shared/dish';
import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-diskdetail',
  templateUrl: './diskdetail.component.html',
  styleUrls: ['./diskdetail.component.scss']
})
export class DiskdetailComponent implements OnInit {

  @Input()
  dish: Dish
  
  constructor() { }

  ngOnInit() {
  }
  
}
