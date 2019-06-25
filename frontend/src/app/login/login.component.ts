import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from "@angular/forms";
import {AuthService} from "../services/auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any = {};
  error = '';

  loginForm = new FormControl('', [
    Validators.required
  ]);

  passwordForm = new FormControl('', [
    Validators.required
  ]);

  constructor(private authService: AuthService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {
  }

  login() {
    this.authService.login(this.model)
      .subscribe((user: any) => {
          if (user) {
            sessionStorage.setItem('token', btoa(this.model.username + ":" + this.model.password));

            this.authService.getCurrentUser()
              .subscribe((data: any) => {
                sessionStorage.setItem('currentUser', JSON.stringify(data));
                this.authService.currentUser = data;
                this.router.navigate(['']);
              });
            return user;
          }

        },
        (error: any) => {
          alert('Błedny login lub hasło');
          // this.matSnackBar.open("Błedny login lub hasło", "Zamknij", {
          //   duration: 3000
          // });
        })
  }

}
