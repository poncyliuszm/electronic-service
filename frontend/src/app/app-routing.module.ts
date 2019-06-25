import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
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
import {PartsComponent} from "./parts/parts.component";
import {PartAddComponent} from "./parts/part-add/part-add.component";
import {PartEditComponent} from "./parts/part-edit/part-edit.component";
import {PartPreviewComponent} from "./parts/part-preview/part-preview.component";
import {ElectronicServicesComponent} from "./electronic-services/electronic-services.component";
import {ElectronicServiceAddComponent} from "./electronic-services/electronic-service-add/electronic-service-add.component";
import {ElectronicServiceEditComponent} from "./electronic-services/electronic-service-edit/electronic-service-edit.component";
import {ElectronicServicePreviewComponent} from "./electronic-services/electronic-service-preview/electronic-service-preview.component";
import {InformationForClientAddComponent} from "./informations-for-client/information-for-client-add/information-for-client-add.component";
import {InformationForClientEditComponent} from "./informations-for-client/information-for-client-edit/information-for-client-edit.component";
import {InformationForClientPreviewComponent} from "./informations-for-client/information-for-client-preview/information-for-client-preview.component";
import {InformationsForClientComponent} from "./informations-for-client/informations-for-client.component";
import {AuthGuard} from "./services/auth-guard.service";
import {LoginComponent} from "./login/login.component";

const routes: Routes = [
  {path: '', component: OrdersComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'clients', component: ClientsComponent, canActivate: [AuthGuard]},
  {path: 'clients/add', component: ClientAddComponent, canActivate: [AuthGuard]},
  {path: 'clients/edit/:id', component: ClientEditComponent, canActivate: [AuthGuard]},
  {path: 'clients/preview/:id', component: ClientPreviewComponent, canActivate: [AuthGuard]},
  {path: 'categories', component: CategoriesComponent, canActivate: [AuthGuard]},
  {path: 'categories/add', component: CategoryAddComponent, canActivate: [AuthGuard]},
  {path: 'categories/edit/:id', component: CategoryEditComponent, canActivate: [AuthGuard]},
  {path: 'categories/preview/:id', component: CategoryPreviewComponent, canActivate: [AuthGuard]},
  {path: 'producers', component: ProducersComponent, canActivate: [AuthGuard]},
  {path: 'producers/add', component: ProducerAddComponent, canActivate: [AuthGuard]},
  {path: 'producers/edit/:id', component: ProducerEditComponent, canActivate: [AuthGuard]},
  {path: 'producers/preview/:id', component: ProducerPreviewComponent, canActivate: [AuthGuard]},
  {path: 'products', component: ProductsComponent, canActivate: [AuthGuard]},
  {path: 'products/add', component: ProductAddComponent, canActivate: [AuthGuard]},
  {path: 'products/edit/:id', component: ProductEditComponent, canActivate: [AuthGuard]},
  {path: 'products/preview/:id', component: ProductPreviewComponent, canActivate: [AuthGuard]},
  {path: 'users', component: UsersComponent, canActivate: [AuthGuard]},
  {path: 'users/add', component: UserAddComponent, canActivate: [AuthGuard]},
  {path: 'users/edit/:id', component: UserEditComponent, canActivate: [AuthGuard]},
  {path: 'users/preview/:id', component: UserPreviewComponent, canActivate: [AuthGuard]},
  {path: 'orders', component: OrdersComponent, canActivate: [AuthGuard]},
  {path: 'orders/add', component: OrderAddComponent, canActivate: [AuthGuard]},
  {path: 'orders/edit/:id', component: OrderEditComponent, canActivate: [AuthGuard]},
  {path: 'orders/preview/:id', component: OrderPreviewComponent, canActivate: [AuthGuard]},
  {path: 'documentTypes', component: DocumentTypesComponent, canActivate: [AuthGuard]},
  {path: 'documentTypes/add', component: DocumentTypeAddComponent, canActivate: [AuthGuard]},
  {path: 'documentTypes/edit/:id', component: DocumentTypeEditComponent, canActivate: [AuthGuard]},
  {path: 'documentTypes/preview/:id', component: DocumentTypePreviewComponent, canActivate: [AuthGuard]},
  {path: 'paymentTypes', component: PaymentTypesComponent, canActivate: [AuthGuard]},
  {path: 'paymentTypes/add', component: PaymentTypeAddComponent, canActivate: [AuthGuard]},
  {path: 'paymentTypes/edit/:id', component: PaymentTypeEditComponent, canActivate: [AuthGuard]},
  {path: 'paymentTypes/preview/:id', component: PaymentTypePreviewComponent, canActivate: [AuthGuard]},
  {path: 'documents', component: DocumentsComponent, canActivate: [AuthGuard]},
  {path: 'documents/add', component: DocumentAddComponent, canActivate: [AuthGuard]},
  {path: 'documents/edit/:id', component: DocumentEditComponent, canActivate: [AuthGuard]},
  {path: 'documents/preview/:id', component: DocumentPreviewComponent, canActivate: [AuthGuard]},
  {path: 'serviceStatuses', component: ServiceStatusesComponent, canActivate: [AuthGuard]},
  {path: 'serviceStatuses/add', component: ServiceStatusAddComponent, canActivate: [AuthGuard]},
  {path: 'serviceStatuses/edit/:id', component: ServiceStatusEditComponent, canActivate: [AuthGuard]},
  {path: 'serviceStatuses/preview/:id', component: ServiceStatusPreviewComponent, canActivate: [AuthGuard]},
  {path: 'operations', component: OperationsComponent, canActivate: [AuthGuard]},
  {path: 'operations/add', component: OperationAddComponent, canActivate: [AuthGuard]},
  {path: 'operations/edit/:id', component: OperationEditComponent, canActivate: [AuthGuard]},
  {path: 'operations/preview/:id', component: OperationPreviewComponent, canActivate: [AuthGuard]},
  {path: 'parts', component: PartsComponent, canActivate: [AuthGuard]},
  {path: 'parts/add', component: PartAddComponent, canActivate: [AuthGuard]},
  {path: 'parts/edit/:id', component: PartEditComponent, canActivate: [AuthGuard]},
  {path: 'parts/preview/:id', component: PartPreviewComponent, canActivate: [AuthGuard]},
  {path: 'electronicServices', component: ElectronicServicesComponent, canActivate: [AuthGuard]},
  {path: 'electronicServices/add', component: ElectronicServiceAddComponent, canActivate: [AuthGuard]},
  {path: 'electronicServices/edit/:id', component: ElectronicServiceEditComponent, canActivate: [AuthGuard]},
  {path: 'electronicServices/preview/:id', component: ElectronicServicePreviewComponent, canActivate: [AuthGuard]},
  {path: 'informationsForClient', component: InformationsForClientComponent, canActivate: [AuthGuard]},
  {path: 'informationsForClient/add', component: InformationForClientAddComponent, canActivate: [AuthGuard]},
  {path: 'informationsForClient/edit/:id', component: InformationForClientEditComponent, canActivate: [AuthGuard]},
  {path: 'informationsForClient/preview/:id', component: InformationForClientPreviewComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
