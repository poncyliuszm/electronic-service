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
import {NgbDateAdapter, NgbDateNativeAdapter, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {CategoriesComponent, CategoryDeleteModal} from "./categories/categories.component";
import {CategoryAddComponent} from "./categories/category-add/category-add.component";
import {CategoryEditComponent} from "./categories/category-edit/category-edit.component";
import {CategoryPreviewComponent} from "./categories/category-preview/category-preview.component";
import {CategoryService} from "./services/category.service";
import {ProducerDeleteModal, ProducersComponent} from "./producers/producers.component";
import {ProducerAddComponent} from "./producers/producer-add/producer-add.component";
import {ProducerEditComponent} from "./producers/producer-edit/producer-edit.component";
import {ProducerPreviewComponent} from "./producers/producer-preview/producer-preview.component";
import {ProducerService} from "./services/producer.service";
import {ProductDeleteModal, ProductsComponent} from "./products/products.component";
import {ProductAddComponent} from "./products/product-add/product-add.component";
import {ProductEditComponent} from "./products/product-edit/product-edit.component";
import {ProductPreviewComponent} from "./products/product-preview/product-preview.component";
import {ProductService} from "./services/product.service";
import {UserDeleteModal, UsersComponent} from "./users/users.component";
import {UserPreviewComponent} from "./users/user-preview/user-preview.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {UserAddComponent} from "./users/user-add/user-add.component";
import {UserService} from "./services/user.service";
import {OrderPreviewComponent} from "./orders/order-preview/order-preview.component";
import {OrderEditComponent} from "./orders/order-edit/order-edit.component";
import {OrderAddComponent} from "./orders/order-add/order-add.component";
import {OrderDeleteModal, OrdersComponent} from "./orders/orders.component";
import {OrderService} from "./services/order.service";

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
    CategoryDeleteModal,
    ProducerDeleteModal,
    ProductDeleteModal,
    UserDeleteModal,
    OrderDeleteModal,
    ProducersComponent,
    ProducerAddComponent,
    ProducerEditComponent,
    ProducerPreviewComponent,
    ProductsComponent,
    ProductAddComponent,
    ProductEditComponent,
    ProductPreviewComponent,
    UsersComponent,
    UserAddComponent,
    UserEditComponent,
    UserPreviewComponent,
    OrdersComponent,
    OrderAddComponent,
    OrderEditComponent,
    OrderPreviewComponent
  ],
  entryComponents: [
    ClientDeleteModal,
    CategoryDeleteModal,
    ProducerDeleteModal,
    ProductDeleteModal,
    UserDeleteModal,
    OrderDeleteModal
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
    CategoryService,
    ProducerService,
    ProductService,
    UserService,
    OrderService,
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
