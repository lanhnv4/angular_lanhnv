import { Dish } from './../shared/dish';
import { Component, Inject, OnInit } from '@angular/core';
import { DishService } from '../services/dish.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})


export class MenuComponent implements OnInit {
 
  constructor(private dishService: DishService, @Inject('baseURL') private baseURL) { }

  ngOnInit() {
     this.dishService.getDishes().subscribe(dishes => this.dishes = dishes);
  }
  dishes: Dish[];

  
}
