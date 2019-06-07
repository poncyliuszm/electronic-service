import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {PartService} from "../../services/part.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-part-add',
  templateUrl: './part-add.component.html',
  styleUrls: ['./part-add.component.css']
})
export class PartAddComponent implements OnInit {

  products;

  part = {
    productId: "",
    serialNumber: "",
    netto: "",
    vat: ""
  };

  constructor(private partService: PartService,
              private router: Router,
              private productService: ProductService,
              private toastr: ToastrService) {
  }

  ngOnInit() {
    this.getProducts();
  }

  addPart(form) {
    if (form.valid) {
      this.partService.save(this.part)
        .subscribe((data: any) => {
          this.router.navigate(['/parts']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano część", "");
  }

  private getProducts() {
    this.productService.list()
      .subscribe((products: any) => {
        this.products = products;
      })
  }

}
