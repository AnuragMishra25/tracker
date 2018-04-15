import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ChartModule } from 'angular2-chartjs';
import { Routes, RouterModule } from '@angular/router';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import {ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CustomOption} from '../app/helpers/customToastOptions';
import { LoadingModule } from 'ngx-loading';


import { AppComponent } from './app.component';
// import { DataTableModule } from "angular2-datatable";
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
import { DashboardComponent } from '../app/home/content/dashboard/dashboard.component'

const appRoutes: Routes = [
  {
    path: '',
    component: LoginComponent
  }, {
    path: 'Home',
    component: HomeComponent
  }
]

@NgModule({
  declarations: [
    AppComponent, LoginComponent, HeaderComponent, FooterComponent,
    HomeComponent, ContentComponent, FacebookComponent, GoogleComponent,
    EmailComponent, DirectComponent, OrganicComponent,DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    // DataTableModule,
    ChartModule,
    NgxDatatableModule,
    RouterModule.forRoot(appRoutes),
    ToastModule.forRoot(),
    LoadingModule
  ],
  providers: [{provide: ToastOptions, useClass: CustomOption},],
  bootstrap: [AppComponent]
})
export class AppModule { }
