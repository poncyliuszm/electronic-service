import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ClientsComponent} from "./clients/clients.component";
import {ClientAddComponent} from "./clients/client-add/client-add.component";
import {ClientEditComponent} from "./clients/client-edit/client-edit.component";
import {ClientPreviewComponent} from "./clients/client-preview/client-preview.component";
import {CategoriesComponent} from "./categories/categories.component";
import {CategoryAddComponent} from "./categories/category-add/category-add.component";
import {CategoryEditComponent} from "./categories/category-edit/category-edit.component";
import {CategoryPreviewComponent} from "./categories/category-preview/category-preview.component";
import {ProducersComponent} from "./producers/producers.component";
import {ProducerAddComponent} from "./producers/producer-add/producer-add.component";
import {ProducerEditComponent} from "./producers/producer-edit/producer-edit.component";
import {ProducerPreviewComponent} from "./producers/producer-preview/producer-preview.component";
import {ProductsComponent} from "./products/products.component";
import {ProductAddComponent} from "./products/product-add/product-add.component";
import {ProductEditComponent} from "./products/product-edit/product-edit.component";
import {ProductPreviewComponent} from "./products/product-preview/product-preview.component";
import {UsersComponent} from "./users/users.component";
import {UserAddComponent} from "./users/user-add/user-add.component";
import {UserEditComponent} from "./users/user-edit/user-edit.component";
import {UserPreviewComponent} from "./users/user-preview/user-preview.component";
import {OrdersComponent} from "./orders/orders.component";
import {OrderAddComponent} from "./orders/order-add/order-add.component";
import {OrderEditComponent} from "./orders/order-edit/order-edit.component";
import {OrderPreviewComponent} from "./orders/order-preview/order-preview.component";
import {DocumentTypesComponent} from "./document-types/document-types.component";
import {DocumentTypeAddComponent} from "./document-types/document-type-add/document-type-add.component";
import {DocumentTypeEditComponent} from "./document-types/document-type-edit/document-type-edit.component";
import {DocumentTypePreviewComponent} from "./document-types/document-type-preview/document-type-preview.component";
import {PaymentTypesComponent} from "./payment-types/payment-types.component";
import {PaymentTypeAddComponent} from "./payment-types/payment-type-add/payment-type-add.component";
import {PaymentTypeEditComponent} from "./payment-types/payment-type-edit/payment-type-edit.component";
import {PaymentTypePreviewComponent} from "./payment-types/payment-type-preview/payment-type-preview.component";
import {DocumentsComponent} from "./documents/documents.component";
import {DocumentAddComponent} from "./documents/document-add/document-add.component";
import {DocumentEditComponent} from "./documents/document-edit/document-edit.component";
import {DocumentPreviewComponent} from "./documents/document-preview/document-preview.component";
import {ServiceStatusesComponent} from "./service-statuses/service-statuses.component";
import {ServiceStatusAddComponent} from "./service-statuses/service-status-add/service-status-add.component";
import {ServiceStatusEditComponent} from "./service-statuses/service-status-edit/service-status-edit.component";
import {ServiceStatusPreviewComponent} from "./service-statuses/service-status-preview/service-status-preview.component";
import {OperationsComponent} from "./operations/operations.component";
import {OperationAddComponent} from "./operations/operation-add/operation-add.component";
import {OperationEditComponent} from "./operations/operation-edit/operation-edit.component";
import {OperationPreviewComponent} from "./operations/operation-preview/operation-preview.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/add', component: ClientAddComponent},
  {path: 'clients/edit/:id', component: ClientEditComponent},
  {path: 'clients/preview/:id', component: ClientPreviewComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'categories/add', component: CategoryAddComponent},
  {path: 'categories/edit/:id', component: CategoryEditComponent},
  {path: 'categories/preview/:id', component: CategoryPreviewComponent},
  {path: 'producers', component: ProducersComponent},
  {path: 'producers/add', component: ProducerAddComponent},
  {path: 'producers/edit/:id', component: ProducerEditComponent},
  {path: 'producers/preview/:id', component: ProducerPreviewComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'products/add', component: ProductAddComponent},
  {path: 'products/edit/:id', component: ProductEditComponent},
  {path: 'products/preview/:id', component: ProductPreviewComponent},
  {path: 'users', component: UsersComponent},
  {path: 'users/add', component: UserAddComponent},
  {path: 'users/edit/:id', component: UserEditComponent},
  {path: 'users/preview/:id', component: UserPreviewComponent},
  {path: 'orders', component: OrdersComponent},
  {path: 'orders/add', component: OrderAddComponent},
  {path: 'orders/edit/:id', component: OrderEditComponent},
  {path: 'orders/preview/:id', component: OrderPreviewComponent},
  {path: 'documentTypes', component: DocumentTypesComponent},
  {path: 'documentTypes/add', component: DocumentTypeAddComponent},
  {path: 'documentTypes/edit/:id', component: DocumentTypeEditComponent},
  {path: 'documentTypes/preview/:id', component: DocumentTypePreviewComponent},
  {path: 'paymentTypes', component: PaymentTypesComponent},
  {path: 'paymentTypes/add', component: PaymentTypeAddComponent},
  {path: 'paymentTypes/edit/:id', component: PaymentTypeEditComponent},
  {path: 'paymentTypes/preview/:id', component: PaymentTypePreviewComponent},
  {path: 'documents', component: DocumentsComponent},
  {path: 'documents/add', component: DocumentAddComponent},
  {path: 'documents/edit/:id', component: DocumentEditComponent},
  {path: 'documents/preview/:id', component: DocumentPreviewComponent},
  {path: 'serviceStatuses', component: ServiceStatusesComponent},
  {path: 'serviceStatuses/add', component: ServiceStatusAddComponent},
  {path: 'serviceStatuses/edit/:id', component: ServiceStatusEditComponent},
  {path: 'serviceStatuses/preview/:id', component: ServiceStatusPreviewComponent},
  {path: 'operations', component: OperationsComponent},
  {path: 'operations/add', component: OperationAddComponent},
  {path: 'operations/edit/:id', component: OperationEditComponent},
  {path: 'operations/preview/:id', component: OperationPreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
