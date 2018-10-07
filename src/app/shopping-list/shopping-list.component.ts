import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients:Ingredient[]  =[ 
    new Ingredient('Apples',5), 
    new Ingredient('Mangoes',5)
  ];
  constructor() { }

  ngOnInit() {
  }

  onIngredientsAdded(ingredient: {name:string,amount:string}){
    this.ingredients.push( new Ingredient(ingredient.name, parseInt(ingredient.amount)));
  }

}
