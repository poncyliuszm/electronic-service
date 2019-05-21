import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {ProducerService} from "../services/producer.service";

@Component({
  selector: 'app-producers',
  templateUrl: './producers.component.html',
  styleUrls: ['./producers.component.css']
})
export class ProducersComponent implements OnInit {
  producers: any;

  constructor(private http: HttpClient,
              private producerService: ProducerService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getProducers();
  }

  getProducers() {
    this.producerService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.producers = data;
      })
  }

  previewProducer(producer) {
    this.router.navigate(['/producers/preview', producer.id]);
  }

  editProducer(producer) {
    this.router.navigate(['/producers/edit', producer.id]);
  }

  open(producer) {
    const modalRef = this.modalService.open(ProducerDeleteModal).result.then(result => {
      if (result === 'true') {
        this.producerService.delete(producer.id)
          .subscribe((data: any) => {
            this.getProducers();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto kategorię produktu", "");
  }


}

@Component({
  selector: 'producer-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie producenta</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć tego producenta?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class ProducerDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
