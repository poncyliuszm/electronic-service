import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {DocumentTypeService} from "../services/document-type.service";
import {AuthService} from "../services/auth.service";

@Component({
  selector: 'app-document-types',
  templateUrl: './document-types.component.html',
  styleUrls: ['./document-types.component.css']
})
export class DocumentTypesComponent implements OnInit {
  documentTypes: any;

  constructor(private http: HttpClient,
              private documentTypeService: DocumentTypeService,
              private router: Router,
              public authService: AuthService,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getDocumentTypes();
  }

  getDocumentTypes() {
    this.documentTypeService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.documentTypes = data;
      })
  }

  previewDocumentType(documentType) {
    this.router.navigate(['/documentTypes/preview', documentType.id]);
  }

  editDocumentType(documentType) {
    this.router.navigate(['/documentTypes/edit', documentType.id]);
  }

  open(documentType) {
    const modalRef = this.modalService.open(DocumentTypeDeleteModal).result.then(result => {
      if (result === 'true') {
        this.documentTypeService.delete(documentType.id)
          .subscribe((data: any) => {
            this.getDocumentTypes();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto rodzaj dokumentu", "");
  }


}

@Component({
  selector: 'document-type-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie rodzaju dokumentu</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć ten rodzaj dokumentu?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class DocumentTypeDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
