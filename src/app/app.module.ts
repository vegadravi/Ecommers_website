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
    AdminHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
