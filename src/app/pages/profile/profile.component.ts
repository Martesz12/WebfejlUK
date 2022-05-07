import { Component, OnInit } from '@angular/core';
import {RecipeService} from "../../shared/services/recipe.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  recipes: Array<any> = [];
  displayedColumns: string[] = ['col-name', "col-sd", "col-actions"];

  constructor(private recipeService: RecipeService, private router: Router) { }

  ngOnInit(): void {
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.recipeService.readByUserid(user.uid).subscribe(recipes => {
      this.recipes = recipes;
    });
  }

  recipe(id: string) {
    localStorage.setItem('recipe', id);
    this.router.navigateByUrl('/recipe');
  }

  delete(id: string) {
    this.recipeService.delete(id).then(_ => {
      this.router.navigateByUrl('/profile');
    }).catch(error => {
      console.error("Hiba a felhasználó hozzáadása során!");
    });
  }
}
