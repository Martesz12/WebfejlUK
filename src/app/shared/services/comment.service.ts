import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Comment} from "../models/Comment";

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  collectionName = 'Comments';

  constructor(private afs: AngularFirestore) { }

  create(comment: Comment){
    comment.id = this.afs.createId();
    return this.afs.collection<Comment>(this.collectionName).doc(comment.id).set(comment);
  }

  read(){
    return this.afs.collection<Comment>(this.collectionName, ref => ref.orderBy("date","desc")).valueChanges();
  }
}
