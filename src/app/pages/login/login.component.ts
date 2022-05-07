import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../shared/services/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  email = new FormControl('');
  password = new FormControl('');

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.email?.addValidators(Validators.required);
    this.password?.addValidators(Validators.required);
  }

  login(){
    if(this.email.valid && this.password.valid){
      this.authService.login(this.email.value, this.password.value).then(cred => {
        this.router.navigateByUrl('/main');
      }).catch(error => {
        console.error(error);
      });
    }
  }

}
