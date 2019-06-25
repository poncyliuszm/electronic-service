import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../../services/user.service";
import {RoleService} from "../../services/role.service";

@Component({
  selector: 'app-client-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

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

  userId;

  constructor(private clientService: ClientService,
              private userService: UserService,
              private roleService: RoleService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
    this.getUser();
    this.getRoles();
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

  save(form) {
    if (form.valid) {
      this.userService.update(this.user)
        .subscribe((data: any) => {
          this.router.navigate(['/users']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano Pracownika", "");
  }

  private getRoles() {
    this.roleService.list()
      .subscribe((roles: any) => {
        this.roles = roles;
      })
  }

}
