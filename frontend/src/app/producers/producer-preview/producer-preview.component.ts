import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-preview',
  templateUrl: './producer-preview.component.html',
  styleUrls: ['./producer-preview.component.css']
})
export class ProducerPreviewComponent implements OnInit {

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
