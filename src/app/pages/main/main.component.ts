import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../shared/services/recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  recipes: Array<any> = [];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    this.recipeService.read().subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  toRecipe(id: string) {
    localStorage.setItem('recipe', id);
    this.router.navigateByUrl('/recipe');
  }
}
