import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.css']
})
export class CategoryPreviewComponent implements OnInit {

  category = {
    name: ""
  };

  categoryId;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.getClient();
  }

  getClient() {
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = +params['id'];
      this.categoryService.getCategory(this.categoryId)
        .subscribe((category: any) => {
          this.category = category;
        })
    });
  }

}
