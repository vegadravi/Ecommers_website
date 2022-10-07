import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './page/home/home.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import { WildcardComponent } from './page/wildcard/wildcard.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo: '/login', pathMatch: 'full'
  },
  {
    path:'register',
    component:RegisterComponent    
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
    path: '**',
    component: WildcardComponent
  },
  {
    path:'',
    redirectTo:'form',
    pathMatch:'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
