import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-client-edit',
  templateUrl: './client-edit.component.html',
  styleUrls: ['./client-edit.component.css']
})
export class ClientEditComponent implements OnInit {

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

  clientId;

  constructor(private clientService: ClientService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
    this.getClient();
  }

  getClient() {
    this.activatedRoute.params.subscribe(params => {
      this.clientId = +params['id'];
      this.clientService.getClient(this.clientId)
        .subscribe((client: any) => {
          this.client = client;
        })
    });
  }

  save(form) {
    if (form.valid) {
      this.clientService.update(this.client)
        .subscribe((data: any) => {
          this.router.navigate(['/clients']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano klienta", "");
  }

}
