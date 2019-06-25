import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user.service";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  roles;

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
    role: "",
    client: this.client
  };

  constructor(private userService: UserService,
              private router: Router,
              private roleService: RoleService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getRoles();
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

  private getRoles() {
    this.roleService.list()
      .subscribe((roles: any) => {
        this.roles = roles;
      })
  }
}
