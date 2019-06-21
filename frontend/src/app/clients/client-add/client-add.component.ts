import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ClientService} from "../../services/client.service";

@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

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
    site: ""
  };

  constructor(private clientService: ClientService,
              private router: Router,
              private toastr: ToastrService) { }

  ngOnInit() {

  }

  addClient(form) {
    if (form.valid) {
      this.clientService.save(this.client)
        .subscribe((data: any) => {
          this.router.navigate(['/clients']);
          this.showToaster();
        });
    }
  }

  showToaster(){
    this.toastr.success("Pomyślnie dodano klienta", "");
  }

}
