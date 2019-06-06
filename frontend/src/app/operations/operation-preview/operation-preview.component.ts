import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {OperationService} from "../../services/operation.service";

@Component({
  selector: 'app-operation-preview',
  templateUrl: './operation-preview.component.html',
  styleUrls: ['./operation-preview.component.css']
})
export class OperationPreviewComponent implements OnInit {

  operation = {
    name: "",
    netto: "",
    vat: ""
  };

  operationId;

  constructor(private operationService: OperationService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getOperation();
  }

  getOperation() {
    this.activatedRoute.params.subscribe(params => {
      this.operationId = +params['id'];
      this.operationService.getOperation(this.operationId)
        .subscribe((operation: any) => {
          this.operation = operation;
        })
    });
  }

}
