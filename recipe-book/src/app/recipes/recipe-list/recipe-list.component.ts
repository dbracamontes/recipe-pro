import { Component, OnInit, EventEmitter,Output } from '@angular/core';
import {Recipe} from '../recipe';

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes : Recipe[] = [
    new Recipe('Dummy', 'Dummy', 'https://upload.wikimedia.org/wikipedia/commons/4/49/Testing22222.jpg',[]),
    new Recipe('Dummy2', 'Dummy2', 'https://upload.wikimedia.org/wikipedia/commons/4/49/Testing22222.jpg',[])
  ];

  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onSelected(recipe:Recipe){
    this.recipeSelected.emit(recipe);
  }

}
