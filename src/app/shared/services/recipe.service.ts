import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Recipe} from "../models/Recipe";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  collectionName = 'Recipes';

  constructor(private afs: AngularFirestore) { }


  create(recipe: Recipe){
    recipe.id = this.afs.createId();
    return this.afs.collection<Recipe>(this.collectionName).doc(recipe.id).set(recipe);
  }

  read(){
    return this.afs.collection<Recipe>(this.collectionName).valueChanges();
  }

  readByUserid(uid: string){
    return this.afs.collection<Recipe>(this.collectionName, ref => ref.where("user_id", "==", uid)).valueChanges();
  }

  getById(id: string){
    return this.afs.collection<Recipe>(this.collectionName).doc(id).valueChanges();
  }

  delete(id: string){
    return this.afs.collection<Comment>(this.collectionName).doc(id).delete();
  }
}
