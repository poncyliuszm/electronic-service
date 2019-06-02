import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {DocumentTypeService} from "../../services/document-type.service";

@Component({
  selector: 'app-document-type-edit',
  templateUrl: './document-type-edit.component.html',
  styleUrls: ['./document-type-edit.component.css']
})
export class DocumentTypeEditComponent implements OnInit {

  documentType = {
    type: ""
  };

  documentTypeId;

  constructor(private documentTypeService: DocumentTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
    this.getDocumentType();
  }

  getDocumentType() {
    this.activatedRoute.params.subscribe(params => {
      this.documentTypeId = +params['id'];
      this.documentTypeService.getDocumentType(this.documentTypeId)
        .subscribe((documentType: any) => {
          this.documentType = documentType;
        })
    });
  }

  save(form) {
    if (form.valid) {
      this.documentTypeService.update(this.documentType)
        .subscribe((data: any) => {
          this.router.navigate(['/documentTypes']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano rodzaj dokumentu", "");
  }

}
