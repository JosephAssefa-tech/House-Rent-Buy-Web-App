import { RouterModule, Routes } from '@angular/router';

import { AddPropertyComponent } from './property/add-property/add-property/add-property.component';
import { NgModule } from '@angular/core';
import { PropertyDetailComponent } from './property/property-detail/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register/user-register.component';

const routes: Routes = [
 {path:'add-property',component:AddPropertyComponent},
 {path:'',component:PropertyListComponent},
 {path:'rent-property',component:PropertyListComponent},
 {path:'property-detail/:id',component:PropertyDetailComponent},
 {path:'**',component:PropertyListComponent},
 {path:'user/login',component:UserLoginComponent},
 {path:'user/register',component:UserRegisterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
