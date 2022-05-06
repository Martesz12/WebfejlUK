import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import {RecipeComponent} from "./recipe.component";
import {MatGridListModule} from "@angular/material/grid-list";


@NgModule({
  declarations: [
    RecipeComponent
  ],
  imports: [
    CommonModule,
    RecipeRoutingModule,
    MatGridListModule
  ]
})
export class RecipeModule { }
