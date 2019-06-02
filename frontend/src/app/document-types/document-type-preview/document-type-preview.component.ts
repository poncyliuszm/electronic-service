import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {DocumentTypeService} from "../../services/document-type.service";

@Component({
  selector: 'app-document-type-preview',
  templateUrl: './document-type-preview.component.html',
  styleUrls: ['./document-type-preview.component.css']
})
export class DocumentTypePreviewComponent implements OnInit {

  documentType = {
    type: ""
  };

  documentTypeId;

  constructor(private documentTypeService: DocumentTypeService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
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

}
