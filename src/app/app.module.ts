import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { DataTableModule } from "angular2-datatable";
import { LoginComponent } from '../app/login/login.component';
import { HomeComponent } from '../app/home/home.component';
import { HeaderComponent } from '../app/home/header/header.component';
import { FooterComponent } from '../app/home/footer/footer.component';
import { ContentComponent } from '../app/home/content/content.component';
import { FacebookComponent } from '../app/home/content/facebook/facebook.component'
import { GoogleComponent } from '../app/home/content/google/google.component'
import { EmailComponent } from '../app/home/content/email/email.component'
import { DirectComponent } from '../app/home/content/direct/direct.component'
import { OrganicComponent } from '../app/home/content/organic/organic.component'

@NgModule({
  declarations: [
    AppComponent, LoginComponent, HeaderComponent, FooterComponent,
    HomeComponent, ContentComponent, FacebookComponent, GoogleComponent,
    EmailComponent, DirectComponent, OrganicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    DataTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
