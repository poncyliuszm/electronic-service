import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgbActiveModal, NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {ToastrService} from "ngx-toastr";
import {CategoryService} from "../services/category.service";

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {
  categories: any;

  constructor(private http: HttpClient,
              private categoryService: CategoryService,
              private router: Router,
              private toastr: ToastrService,
              private modalService: NgbModal) {
  }

  ngOnInit() {
    this.getCategories();
  }

  getCategories() {
    this.categoryService.list()
      .subscribe((data: any) => {
        let counter = 1;
        data.forEach(c => c['position'] = counter++);
        this.categories = data;
      })
  }

  previewCategory(category) {
    this.router.navigate(['/categories/preview', category.id]);
  }

  editCategory(category) {
    this.router.navigate(['/categories/edit', category.id]);
  }

  open(category) {
    const modalRef = this.modalService.open(CategoryDeleteModal).result.then(result => {
      if (result === 'true') {
        this.categoryService.delete(category.id)
          .subscribe((data: any) => {
            this.getCategories();
            this.showDeleteToaster()
          })
      }
    });
  }

  showDeleteToaster() {
    this.toastr.success("Pomyślnie usunięto kategorię produktu", "");
  }


}

@Component({
  selector: 'category-delete-modal',
  template: `
    <div class="modal-header">
      <h4 class="modal-title" id="modal-title">Usunięcie kategorii produktu</h4>
      <button type="button" class="close" aria-label="Close button" aria-describedby="modal-title"
              (click)="activeModal.dismiss('Cross click')">
        <span aria-hidden="true">&times;</span>
      </button>
    </div>
    <div class="modal-body">
      <p>Czy na pewno chcesz usunąć tą kategorię produktu?</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('true')">Tak</button>
      <button type="button" class="btn btn-outline-dark" (click)="activeModal.close('false')">Anuluj</button>
    </div>
  `
})
export class CategoryDeleteModal {
  @Input() name;

  constructor(public activeModal: NgbActiveModal) {
  }
}
