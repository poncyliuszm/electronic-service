import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {PartService} from "../../services/part.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-part-edit',
  templateUrl: './part-edit.component.html',
  styleUrls: ['./part-edit.component.css']
})
export class PartEditComponent implements OnInit {

  products;

  part = {
    productId: "",
    serialNumber: "",
    netto: "",
    vat: ""
  };

  partId;

  constructor(private partService: PartService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private productService: ProductService,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
    this.getPart();
    this.getProducts();
  }

  getPart() {
    this.activatedRoute.params.subscribe(params => {
      this.partId = +params['id'];
      this.partService.getPart(this.partId)
        .subscribe((part: any) => {
          this.part = part;
        })
    });
  }

  save(form) {
    if (form.valid) {
      this.partService.update(this.part)
        .subscribe((data: any) => {
          this.router.navigate(['/parts']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano część", "");
  }

  private getProducts() {
    this.productService.list()
      .subscribe((products: any) => {
        this.products = products;
      })
  }

}
