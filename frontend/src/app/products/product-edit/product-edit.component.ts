import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {ProducerService} from "../../services/producer.service";
import {CategoryService} from "../../services/category.service";
import {ProductService} from "../../services/product.service";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

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
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef,
              private categoryService: CategoryService,
              private producerService: ProducerService) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
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

  save(form) {
    if (form.valid) {
      this.productService.update(this.product)
        .subscribe((data: any) => {
          this.router.navigate(['/products']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano produkt", "");
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
