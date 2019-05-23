import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ProductService} from "../../services/product.service";
import {CategoryService} from "../../services/category.service";
import {ProducerService} from "../../services/producer.service";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  categories;
  producers;

  product = {
    categoryId: "",
    producerId: "",
    type: "",
    version: "",
    description: "",
  };

  constructor(private productService: ProductService,
              private router: Router,
              private toastr: ToastrService,
              private categoryService: CategoryService,
              private producerService: ProducerService) {
  }

  ngOnInit() {
    this.getCategories();
    this.getProducers();
  }

  addProduct(form) {
    if (form.valid) {
      this.productService.save(this.product)
        .subscribe((data: any) => {
          this.router.navigate(['/products']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano produkt", "");
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
