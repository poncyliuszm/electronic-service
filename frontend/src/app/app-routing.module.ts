import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ClientsComponent} from "./clients/clients.component";
import {ClientAddComponent} from "./clients/client-add/client-add.component";
import {ClientEditComponent} from "./clients/client-edit/client-edit.component";
import {ClientPreviewComponent} from "./clients/client-preview/client-preview.component";
import {CategoriesComponent} from "./categories/categories.component";
import {CategoryAddComponent} from "./categories/category-add/category-add.component";
import {CategoryEditComponent} from "./categories/category-edit/category-edit.component";
import {CategoryPreviewComponent} from "./categories/category-preview/category-preview.component";

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
  {path: 'categories/preview/:id', component: CategoryPreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
