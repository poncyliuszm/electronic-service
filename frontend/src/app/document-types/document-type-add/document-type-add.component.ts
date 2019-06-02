import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {DocumentTypeService} from "../../services/document-type.service";

@Component({
  selector: 'app-document-type-add',
  templateUrl: './document-type-add.component.html',
  styleUrls: ['./document-type-add.component.css']
})
export class DocumentTypeAddComponent implements OnInit {

  documentType = {
    type: ""
  };

  constructor(private documentTypeService: DocumentTypeService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  addDocumentType(form) {
    if (form.valid) {
      this.documentTypeService.save(this.documentType)
        .subscribe((data: any) => {
          this.router.navigate(['/documentTypes']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano rodzaj dokumentu", "");
  }

}
