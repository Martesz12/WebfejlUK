import { Component, OnInit } from '@angular/core';
import {Recipe} from "../../shared/models/Recipe";
import {RecipeService} from "../../shared/services/recipe.service";

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {

  recipe: Recipe | any;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.recipeService.getById(localStorage.getItem('recipe') as string).subscribe(recipe => {
      this.recipe = recipe;
    });
  }
}
