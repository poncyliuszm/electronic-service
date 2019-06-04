import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {DocumentService} from "../services/document.service";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.css']
})
export class DocumentsComponent implements OnInit {
  documents: any;

  constructor(private http: HttpClient,
              private documentService: DocumentService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getDocuments();
  }

  getDocuments() {
    this.documentService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.documents = data;
      })
  }

  previewDocument(document) {
    this.router.navigate(['/documents/preview', document.id]);
  }

  editDocument(document) {
    this.router.navigate(['/documents/edit', document.id]);
  }

  open(document) {
    const modalRef = this.modalService.open(DocumentDeleteModal).result.then(result => {
      if (result === 'true') {
        this.documentService.delete(document.id)
          .subscribe((data: any) => {
            this.getDocuments();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto zlecenie", "");
  }


}

@Component({
  selector: 'document-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie dokumentu sprzedaży</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć ten dokument sprzedaży?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class DocumentDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
