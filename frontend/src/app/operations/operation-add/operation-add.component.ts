import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {OperationService} from "../../services/operation.service";

@Component({
  selector: 'app-operation-add',
  templateUrl: './operation-add.component.html',
  styleUrls: ['./operation-add.component.css']
})
export class OperationAddComponent implements OnInit {

  operation = {
    name: "",
    netto: "",
    vat: ""
  };

  constructor(private operationService: OperationService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  addOperation(form) {
    if (form.valid) {
      this.operationService.save(this.operation)
        .subscribe((data: any) => {
          this.router.navigate(['/operations']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano usługę", "");
  }

}
