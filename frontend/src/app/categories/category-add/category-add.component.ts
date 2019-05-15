import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";
import {CategoryService} from "../../services/category.service";

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {

  category = {
    name: ""
  };

  constructor(private categoryService: CategoryService,
              private router: Router,
              private toastr: ToastrService) {
  }

  ngOnInit() {

  }

  addCategory(form) {
    if (form.valid) {
      this.categoryService.save(this.category)
        .subscribe((data: any) => {
          this.router.navigate(['/categories']);
          this.showToaster();
        });
    }
  }

  showToaster() {
    this.toastr.success("Pomyślnie dodano kategorię produktu", "");
  }

}
