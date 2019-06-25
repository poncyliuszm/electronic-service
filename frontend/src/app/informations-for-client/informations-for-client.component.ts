import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {InformationForClientService} from "../services/informationForClient.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-informations-for-client',
  templateUrl: './informations-for-client.component.html',
  styleUrls: ['./informations-for-client.component.css']
})
export class InformationsForClientComponent implements OnInit {
  informationsForClient: any;

  constructor(private http: HttpClient,
              private informationForClientService: InformationForClientService,
              private router: Router,
              private toastr: ToastrService,
              public authService: AuthService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getInformationsForClient();
  }

  getInformationsForClient() {
    this.informationForClientService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.informationsForClient = data;
      })
  }

  previewInformationForClient(informationForClient) {
    this.router.navigate(['/informationsForClient/preview', informationForClient.id]);
  }

  editInformationForClient(informationForClient) {
    this.router.navigate(['/informationsForClient/edit', informationForClient.id]);
  }

  open(informationForClient) {
    const modalRef = this.modalService.open(InformationForClientDeleteModal).result.then(result => {
      if (result === 'true') {
        this.informationForClientService.delete(informationForClient.id)
          .subscribe((data: any) => {
            this.getInformationsForClient();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto informację dla klienta", "");
  }


}

@Component({
  selector: 'information-for-client-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie informacji dla klienta</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć tą informację dla klienta?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class InformationForClientDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
