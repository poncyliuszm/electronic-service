import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {OperationService} from "../../services/operation.service";

@Component({
  selector: 'app-operation-edit',
  templateUrl: './operation-edit.component.html',
  styleUrls: ['./operation-edit.component.css']
})
export class OperationEditComponent implements OnInit {

  operation = {
    name: "",
    netto: "",
    vat: ""
  };

  operationId;

  constructor(private operationService: OperationService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
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

  save(form) {
    if (form.valid) {
      this.operationService.update(this.operation)
        .subscribe((data: any) => {
          this.router.navigate(['/operations']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano usługę", "");
  }

}
