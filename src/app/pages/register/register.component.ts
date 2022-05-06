import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";
import {User} from "../../shared/models/User";
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";
import {UserService} from "../../shared/services/user.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    rePassword: new FormControl(''),
    firstname: new FormControl(''),
    lastname: new FormControl('')
  });

  constructor(private router: Router, private authService: AuthService, private userService: UserService) { }


  ngOnInit(): void {
    this.registerForm.get('email')?.addValidators(Validators.required);
    this.registerForm.get('password')?.addValidators(Validators.required);
    this.registerForm.get('rePassword')?.addValidators(Validators.required);
    this.registerForm.get('firstname')?.addValidators(Validators.required);
    this.registerForm.get('lastname')?.addValidators(Validators.required);
  }

  onSubmit() {
    if(this.registerForm.valid){
      this.authService.register(this.registerForm.get('email')?.value, this.registerForm.get('password')?.value).then(cred => {
        const user: User = {
          id: cred.user?.uid as string,
          email: this.registerForm.get('email')?.value,
          username: this.registerForm.get('lastname')?.value + " " + this.registerForm.get('firstname')?.value,
          favourites: []
        };
        this.userService.create(user).then(_ => {
          console.log("Felhasználó hozzáadása sikeres");
        }).catch(error => {
          console.error("Hiba a felhasználó hozzáadása során!")
        });
        this.router.navigateByUrl('/main')
      }).catch(error => {
        console.error(error);
      });
    }

  }
}
