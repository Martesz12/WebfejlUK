import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipeRoutingModule } from './recipe-routing.module';
import {RecipeComponent} from "./recipe.component";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatListModule} from "@angular/material/list";


@NgModule({
  declarations: [
    RecipeComponent
  ],
    imports: [
        CommonModule,
        RecipeRoutingModule,
        MatGridListModule,
        MatListModule
    ]
})
export class RecipeModule { }
