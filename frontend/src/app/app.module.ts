import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ClientDeleteModal, ClientsComponent} from './clients/clients.component';
import {ClientAddComponent} from './clients/client-add/client-add.component';
import {ClientEditComponent} from './clients/client-edit/client-edit.component';
import {ClientService} from "./services/client.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ClientPreviewComponent} from './clients/client-preview/client-preview.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CategoriesComponent, CategoryDeleteModal} from "./categories/categories.component";
import {CategoryAddComponent} from "./categories/category-add/category-add.component";
import {CategoryEditComponent} from "./categories/category-edit/category-edit.component";
import {CategoryPreviewComponent} from "./categories/category-preview/category-preview.component";
import {CategoryService} from "./services/category.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    ClientAddComponent,
    ClientEditComponent,
    ClientPreviewComponent,
    CategoriesComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    CategoryPreviewComponent,
    ClientDeleteModal,
    CategoryDeleteModal
  ],
  entryComponents: [
    ClientDeleteModal,
    CategoryDeleteModal
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut: 5000,
      positionClass: 'toast-bottom-center',
      preventDuplicates: true
    })
  ],
  providers: [
    ClientService,
    CategoryService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
