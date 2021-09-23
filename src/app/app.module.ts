import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewPersonComponent } from './new-person/new-person.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { HttpClientModule } from '@angular/common/http';
import { HttpErrorHandlerService } from "./services/common/http-error-handler.service";
import { MessageService } from "./services/common/message.service";

@NgModule({
  declarations: [
    AppComponent,
    NewPersonComponent,
    PatientListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [
    HttpErrorHandlerService,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
