import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {ClientService} from "../services/client.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients: any;
  // $: any;

  constructor(private http: HttpClient,
              private clientsService: ClientService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getClients();
  }

  getClients() {
    this.clientsService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.clients = data;
      })
  }

  previewClient(client) {
    this.router.navigate(['/clients/preview', client.id]);
  }

  editClient(client) {
    this.router.navigate(['/clients/edit', client.id]);
  }

  open(client) {
    const modalRef = this.modalService.open(NgbdModalContent).result.then(result => {
      if(result === 'true') {
        this.clientsService.delete(client.id)
          .subscribe((data:any) => {
            this.getClients();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto klienta", "");
  }


}

@Component({
  selector: 'ngbd-modal-content',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie klienta</h4>
      <button type="button"  class="close" aria-label="Close button" aria-describedby="modal-title" (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć tego klienta?</p>
    </div>
    <div class="modal-footer">
      <button  type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button  type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class NgbdModalContent {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {}
}
