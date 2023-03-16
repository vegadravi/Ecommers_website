import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './page/header/header.component';
import { RegisterComponent } from './page/register/register.component';
import { LoginComponent } from './page/login/login.component';
import { HomeComponent } from './page/home/home.component';
import { FooterComponent } from './page/footer/footer.component';
import { WildcardComponent } from './page/wildcard/wildcard.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrandHomeComponent } from './page/brand-home/brand-home.component';
import { ContactComponent } from './page/contact/contact.component';
import { AdminLoginComponent } from './page/admin-login/admin-login.component';
import { AdminRegisterComponent } from './page/admin-register/admin-register.component';
import { AdminHomeComponent } from './page/admin-home/admin-home.component';
import { LoginTypeComponent } from './page/login-type/login-type.component';
import { CustomerHomeComponent } from './page/customer-home/customer-home.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
// import { AdminItemsComponent } from './admin-items/admin-items.component';
import { AdminSidenavComponent } from './admin-sidenav/admin-sidenav.component';
import { AdminViewOrderComponent } from './admin-view-order/admin-view-order.component';
import { AdminItemsComponent } from './page/admin-items/admin-items.component';
import { AdminHelpComponent } from './page/admin-help/admin-help.component';
import { AdminSettingComponent } from './page/admin-setting/admin-setting.component';
import { FormioAppConfig, FormioModule } from 'angular-formio';
import {ToastModule} from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';//
// import { NgxEchartsModule } from 'ngx-echarts';

//import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    FooterComponent,
    WildcardComponent,
    BrandHomeComponent,
    ContactComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminHomeComponent,
    LoginTypeComponent,
    CustomerHomeComponent,
    AdminHeaderComponent,
    AdminItemsComponent,
    AdminSidenavComponent,
    AdminViewOrderComponent,
    AdminHelpComponent,
    AdminSettingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // AdminHomeRoutingModule,
    FormsModule,
    FormioModule,
    ReactiveFormsModule,
    // AdminItemsModule,
    HttpClientModule,
    // NgxEchartsModule,
    ToastModule,
    BrowserAnimationsModule,
  
    //ChartModule
  ],
  providers:[],
  bootstrap: [AppComponent]
})
export class AppModule { }
