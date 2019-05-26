import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-client-preview',
  templateUrl: './user-preview.component.html',
  styleUrls: ['./user-preview.component.css']
})
export class UserPreviewComponent implements OnInit {

  client = {
    name: "",
    surname: "",
    gender: "",
    company: "",
    regon: "",
    nip: "",
    city: "",
    postalCode: "",
    street: "",
    phone1: "",
    phone2: "",
    fax: "",
    email: "",
    www: ""
  };

  user = {
    login: "",
    password: "",
    client: this.client
  };

  userId;

  constructor(private userService: UserService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getUser();
  }

  getUser() {
    this.activatedRoute.params.subscribe(params => {
      this.userId = +params['id'];
      this.userService.getUser(this.userId)
        .subscribe((user: any) => {
          this.user = user;
        })
    });
  }

}
