import { Component, OnInit, Output,EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Plate Shawarma recipe', 'Plate Shawarma description', 'https://bigoven-res.cloudinary.com/image/upload/t_recipe-256/caesar-salad-ala-steve-3.jpg'),
    new Recipe('Cake recipe', 'Cake description', 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mothers-day-cake-carrot-1583778815.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

  onSelectRecipe(selectedRecipe: Recipe) {
    this.selectedRecipe.emit(selectedRecipe);
  }

}
