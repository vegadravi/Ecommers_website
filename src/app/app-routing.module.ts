import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './page/contact/contact.component';
import { BrandHomeComponent } from './page/brand-home/brand-home.component';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { WildcardComponent } from './page/wildcard/wildcard.component';
import { AdminLoginComponent } from './page/admin-login/admin-login.component';
import { AdminRegisterComponent } from './page/admin-register/admin-register.component';
import { AdminHomeComponent } from './page/admin-home/admin-home.component';
import { LoginTypeComponent } from './page/login-type/login-type.component';
import { CustomerHomeComponent } from './page/customer-home/customer-home.component';
// import { AdminItemsComponent } from './admin-items/admin-items.component';
import { AdminHeaderComponent } from './admin-header/admin-header.component';
import { AdminViewOrderComponent } from './admin-view-order/admin-view-order.component';
import { AdminItemsComponent } from './page/admin-items/admin-items.component';
import { AdminHelpComponent } from './page/admin-help/admin-help.component';
import { AdminSettingComponent } from './page/admin-setting/admin-setting.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: '/home', pathMatch: 'full'
  },
  {
    path:'brand',
    component:BrandHomeComponent 
  },
  {
    path:'customer-home',
    component:CustomerHomeComponent
  },
  {
    path:'login-type',
    component:LoginTypeComponent
  },
 
  {
    path:'contact',
    component:ContactComponent

  },
  {
    path:'register',
    component:RegisterComponent    
  },
  {
    path:'admin-register',
    component:AdminRegisterComponent
  },
  {
    path:'admin-home',
    component:AdminHomeComponent,
  },
  {
    path:'home',
    component :HomeComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'admin-view-order',
    component:AdminViewOrderComponent
  },
  {
    path:'admin-item',
    component:AdminItemsComponent
  },
  {
    path:'admin-help',
    component:AdminHelpComponent
  },
  {
    path:'admin-setting',
    component:AdminSettingComponent
  },
  {
    path:'admin',
    component:AdminLoginComponent

  },
  {
    path: '**',
    component: WildcardComponent
  },
  {
    path:'',
    redirectTo:'form',
    pathMatch:'full',
  },
  
];

@NgModule({
  // imports: [RouterModule.forRoot(routes)],
  imports: [RouterModule.forRoot(routes, { enableTracing: false, scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
