import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-edit',
  templateUrl: './producer-edit.component.html',
  styleUrls: ['./producer-edit.component.css']
})
export class ProducerEditComponent implements OnInit {

  category = {
    name: ""
  };

  categoryId;

  constructor(private categoryService: CategoryService,
              private router: Router,
              private activatedRoute: ActivatedRoute,
              private toastr: ToastrService,
              private changeDetectorRef: ChangeDetectorRef) {

  }

  ngOnInit() {
    this.changeDetectorRef.detectChanges(); //add this because conent is not updating in custom notification
    this.getCategory();
  }

  getCategory() {
    this.activatedRoute.params.subscribe(params => {
      this.categoryId = +params['id'];
      this.categoryService.getCategory(this.categoryId)
        .subscribe((category: any) => {
          this.category = category;
        })
    });
  }

  save(form) {
    if (form.valid) {
      this.categoryService.update(this.category)
        .subscribe((data: any) => {
          this.router.navigate(['/categories']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie zaktualizowano kategorię produktu", "");
  }

}
