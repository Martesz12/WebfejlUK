import {Component, OnChanges, OnInit} from '@angular/core';
import { Comment } from '../../shared/models/Comment';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../shared/services/auth.service";
import {UserService} from "../../shared/services/user.service";
import {User} from "../../shared/models/User";
import {CommentService} from "../../shared/services/comment.service";


@Component({
  selector: 'app-forum',
  templateUrl: './forum.component.html',
  styleUrls: ['./forum.component.scss']
})
export class ForumComponent implements OnInit, OnChanges {
  commentObject: any = {};
  comments: Array<any> = [];
  user?: User;

  commentsForm = new FormGroup({
    username: new FormControl(''),
    comment: new FormControl(''),
    date: new FormControl('')
  });

  constructor(private userService: UserService, private commentService: CommentService) { }

  ngOnInit(): void {
    console.log("oninit benne");
    const user = JSON.parse(localStorage.getItem('user') as string) as firebase.default.User;
    this.userService.getById(user.uid).subscribe(data => {
      this.user = data;
      this.commentsForm.get('username')?.setValue(this.user?.username);
    }, error => {
      console.error("Valami baj van :(");
    });
  }

  //TODO ez valamiért nem mükszik
  //TODO dátum szerinti időrendben jöjjenek be a kommentek
  ngOnChanges(): void{
    console.log("changebe benne");
    this.commentService.read().subscribe(comments => {
      this.comments = comments;
    });
  }

  addComment() {
    if(this.commentsForm.get('comment')){
      const comment: Comment = {
        id: "",
        username: this.commentsForm.get('username')?.value,
        comment: this.commentsForm.get('comment')?.value,
        date: new Date().getTime()
      };
      this.commentService.create(comment).then(_ => {
        console.log("Hozzászólás hozzáadása sikeres");
      }).catch(error => {
        console.error("Hiba a felhasználó hozzáadása során!")
      });
      this.commentService.read().subscribe(comments => {
        this.comments = comments;
      });
    }
  }
}
