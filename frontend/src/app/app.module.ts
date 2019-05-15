import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {ClientsComponent, NgbdModalContent} from './clients/clients.component';
import {ClientAddComponent} from './clients/client-add/client-add.component';
import {ClientEditComponent} from './clients/client-edit/client-edit.component';
import {ClientService} from "./services/client.service";
import {HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";
import {ClientPreviewComponent} from './clients/client-preview/client-preview.component';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientsComponent,
    ClientAddComponent,
    ClientEditComponent,
    ClientPreviewComponent,
    NgbdModalContent
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
  entryComponents: [
    NgbdModalContent
  ],
  providers: [
    ClientService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

}
