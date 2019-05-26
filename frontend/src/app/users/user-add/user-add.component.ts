import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

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

  constructor(private userService: UserService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  addUser(form) {
    if (form.valid) {
      this.userService.save(this.user)
        .subscribe((data: any) => {
          this.router.navigate(['/users']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano pracownika", "");
  }

}
