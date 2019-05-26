import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {UserService} from "../services/user.service";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any;

  constructor(private http: HttpClient,
              private userService: UserService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.users = data;
      })
  }

  previewUser(user) {
    this.router.navigate(['/users/preview', user.id]);
  }

  editUser(user) {
    this.router.navigate(['/users/edit', user.id]);
  }

  open(user) {
    const modalRef = this.modalService.open(UserDeleteModal).result.then(result => {
      if (result === 'true') {
        this.userService.delete(user.id)
          .subscribe((data: any) => {
            this.getUsers();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto pracownika", "");
  }


}

@Component({
  selector: 'user-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie pracownika</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć tego pracownika?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class UserDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
