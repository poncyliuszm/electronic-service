import {Component, OnInit} from '@angular/core';
import {ClientService} from "../../services/client.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-client-preview',
  templateUrl: './client-preview.component.html',
  styleUrls: ['./client-preview.component.css']
})
export class ClientPreviewComponent implements OnInit {

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
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
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

}
