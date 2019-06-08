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
import {DocumentTypePreviewComponent} from "./document-types/document-type-preview/document-type-preview.component";
import {DocumentTypeEditComponent} from "./document-types/document-type-edit/document-type-edit.component";
import {DocumentTypeAddComponent} from "./document-types/document-type-add/document-type-add.component";
import {DocumentTypeDeleteModal, DocumentTypesComponent} from "./document-types/document-types.component";
import {DocumentTypeService} from "./services/document-type.service";
import {PaymentTypePreviewComponent} from "./payment-types/payment-type-preview/payment-type-preview.component";
import {PaymentTypeEditComponent} from "./payment-types/payment-type-edit/payment-type-edit.component";
import {PaymentTypeAddComponent} from "./payment-types/payment-type-add/payment-type-add.component";
import {PaymentTypeDeleteModal, PaymentTypesComponent} from "./payment-types/payment-types.component";
import {PaymentTypeService} from "./services/payment-type.service";
import {DocumentAddComponent} from "./documents/document-add/document-add.component";
import {DocumentPreviewComponent} from "./documents/document-preview/document-preview.component";
import {DocumentEditComponent} from "./documents/document-edit/document-edit.component";
import {DocumentDeleteModal, DocumentsComponent} from "./documents/documents.component";
import {DocumentService} from "./services/document.service";
import {ServiceStatusAddComponent} from "./service-statuses/service-status-add/service-status-add.component";
import {ServiceStatusPreviewComponent} from "./service-statuses/service-status-preview/service-status-preview.component";
import {ServiceStatusEditComponent} from "./service-statuses/service-status-edit/service-status-edit.component";
import {ServiceStatusDeleteModal, ServiceStatusesComponent} from "./service-statuses/service-statuses.component";
import {ServiceStatusService} from "./services/service-status.service";
import {OperationDeleteModal, OperationsComponent} from "./operations/operations.component";
import {OperationPreviewComponent} from "./operations/operation-preview/operation-preview.component";
import {OperationEditComponent} from "./operations/operation-edit/operation-edit.component";
import {OperationAddComponent} from "./operations/operation-add/operation-add.component";
import {OperationService} from "./services/operation.service";
import {PartEditComponent} from "./parts/part-edit/part-edit.component";
import {PartPreviewComponent} from "./parts/part-preview/part-preview.component";
import {PartAddComponent} from "./parts/part-add/part-add.component";
import {PartDeleteModal, PartsComponent} from "./parts/parts.component";
import {PartService} from "./services/part.service";
import {ElectronicServiceAddComponent} from "./electronic-services/electronic-service-add/electronic-service-add.component";
import {ElectronicServiceEditComponent} from "./electronic-services/electronic-service-edit/electronic-service-edit.component";
import {ElectronicServicePreviewComponent} from "./electronic-services/electronic-service-preview/electronic-service-preview.component";
import {
  ElectronicServiceDeleteModal,
  ElectronicServicesComponent
} from "./electronic-services/electronic-services.component";
import {ElectronicServiceService} from "./services/electronicService.service";

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
    DocumentTypeDeleteModal,
    PaymentTypeDeleteModal,
    DocumentDeleteModal,
    ServiceStatusDeleteModal,
    OperationDeleteModal,
    PartDeleteModal,
    ElectronicServiceDeleteModal,
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
    OrderPreviewComponent,
    DocumentTypesComponent,
    DocumentTypeAddComponent,
    DocumentTypeEditComponent,
    DocumentTypePreviewComponent,
    PaymentTypesComponent,
    PaymentTypeAddComponent,
    PaymentTypeEditComponent,
    PaymentTypePreviewComponent,
    DocumentsComponent,
    DocumentAddComponent,
    DocumentEditComponent,
    DocumentPreviewComponent,
    ServiceStatusesComponent,
    ServiceStatusAddComponent,
    ServiceStatusEditComponent,
    ServiceStatusPreviewComponent,
    OperationsComponent,
    OperationAddComponent,
    OperationEditComponent,
    OperationPreviewComponent,
    PartsComponent,
    PartAddComponent,
    PartEditComponent,
    PartPreviewComponent,
    ElectronicServicesComponent,
    ElectronicServiceAddComponent,
    ElectronicServiceEditComponent,
    ElectronicServicePreviewComponent
  ],
  entryComponents: [
    ClientDeleteModal,
    CategoryDeleteModal,
    ProducerDeleteModal,
    ProductDeleteModal,
    UserDeleteModal,
    OrderDeleteModal,
    DocumentTypeDeleteModal,
    PaymentTypeDeleteModal,
    DocumentDeleteModal,
    ServiceStatusDeleteModal,
    OperationDeleteModal,
    PartDeleteModal,
    ElectronicServiceDeleteModal
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
    DocumentTypeService,
    PaymentTypeService,
    DocumentService,
    ServiceStatusService,
    OperationService,
    PartService,
    ElectronicServiceService,
    {provide: NgbDateAdapter, useClass: NgbDateNativeAdapter}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
