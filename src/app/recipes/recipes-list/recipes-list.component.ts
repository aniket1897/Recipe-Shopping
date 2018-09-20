import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('Test recipe','test description','https://img.taste.com.au/_k6sa3dZ/w720-h480-cfill-q80/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg'),

    new Recipe('Test recipe','test description','https://img.taste.com.au/_k6sa3dZ/w720-h480-cfill-q80/taste/2016/11/chicken-and-prosciutto-parmigiana-79468-1.jpeg')

  ];

  constructor() { }

  ngOnInit() {
  }

}
