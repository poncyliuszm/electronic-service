import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ProducerService} from "../../services/producer.service";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-product-preview',
  templateUrl: './product-preview.component.html',
  styleUrls: ['./product-preview.component.css']
})
export class ProductPreviewComponent implements OnInit {

  categories;
  producers;
  productId;

  product = {
    categoryId: "",
    producerId: "",
    type: "",
    version: "",
    description: "",
  };

  constructor(private productService: ProductService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private categoryService: CategoryService,
              private producerService: ProducerService) {
  }

  ngOnInit() {
    this.getProduct();
    this.getCategories();
    this.getProducers();
  }

  getProduct() {
    this.activatedRoute.params.subscribe(params => {
      this.productId = +params['id'];
      this.productService.getProduct(this.productId)
        .subscribe((product: any) => {
          this.product = product;
        })
    });
  }

  private getCategories() {
    this.categoryService.list()
      .subscribe((categories: any) => {
        this.categories = categories;
      })
  }

  private getProducers() {
    this.producerService.list()
      .subscribe((producers: any) => {
        this.producers = producers;
      })
  }

}
