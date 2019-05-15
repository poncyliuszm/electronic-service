import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {ClientsComponent} from "./clients/clients.component";
import {ClientAddComponent} from "./clients/client-add/client-add.component";
import {ClientEditComponent} from "./clients/client-edit/client-edit.component";
import {ClientPreviewComponent} from "./clients/client-preview/client-preview.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'clients/add', component: ClientAddComponent},
  {path: 'clients/edit/:id', component: ClientEditComponent},
  {path: 'clients/preview/:id', component: ClientPreviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
