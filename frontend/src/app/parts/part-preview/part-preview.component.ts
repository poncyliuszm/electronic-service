import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PartService} from "../../services/part.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-part-preview',
  templateUrl: './part-preview.component.html',
  styleUrls: ['./part-preview.component.css']
})
export class PartPreviewComponent implements OnInit {

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
              private productService: ProductService,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
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

  private getProducts() {
    this.productService.list()
      .subscribe((products: any) => {
        this.products = products;
      })
  }

}
