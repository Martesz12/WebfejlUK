import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {RecipeService} from "../../shared/services/recipe.service";
import {Recipe} from "../../shared/models/Recipe";
import {Router} from "@angular/router";

@Component({
  selector: 'app-favourite',
  templateUrl: './favourite.component.html',
  styleUrls: ['./favourite.component.scss']
})
export class FavouriteComponent implements OnInit {

  recipeForm = new FormGroup({
    name: new FormControl(''),
    short_description: new FormControl(''),
    recipe: new FormControl(''),
    ingredients: new FormControl('')
  });


  constructor(private recipeService: RecipeService, private router: Router) { }


  ngOnInit(): void {

  }

  addRecipe() {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    const recipe: Recipe = {
      id: "",
      user_id: user.uid,
      name: this.recipeForm.get('name')?.value,
      short_description: this.recipeForm.get('short_description')?.value,
      recipe: this.recipeForm.get('recipe')?.value,
      ingredients: this.recipeForm.get('ingredients')?.value.split(",")
    };
    this.recipeService.create(recipe).then(_ => {
      console.log("Recept hozzáadása sikeres");
    }).catch(error => {
      console.error("Hiba a recept hozzáadása során!")
    });
    this.router.navigateByUrl('/main')
  }
}
