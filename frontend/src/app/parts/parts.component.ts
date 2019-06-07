import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {PartService} from "../services/part.service";

@Component({
  selector: 'app-parts',
  templateUrl: './parts.component.html',
  styleUrls: ['./parts.component.css']
})
export class PartsComponent implements OnInit {
  parts: any;

  constructor(private http: HttpClient,
              private partService: PartService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getParts();
  }

  getParts() {
    this.partService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.parts = data;
      })
  }

  previewPart(part) {
    this.router.navigate(['/parts/preview', part.id]);
  }

  editPart(part) {
    this.router.navigate(['/parts/edit', part.id]);
  }

  open(part) {
    const modalRef = this.modalService.open(PartDeleteModal).result.then(result => {
      if (result === 'true') {
        this.partService.delete(part.id)
          .subscribe((data: any) => {
            this.getParts();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto część", "");
  }


}

@Component({
  selector: 'part-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie części</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć tą część?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class PartDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
