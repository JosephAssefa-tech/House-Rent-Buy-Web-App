import { RouterModule, Routes } from '@angular/router';

import { AddPropertyComponent } from './property/add-property/add-property/add-property.component';
import { NgModule } from '@angular/core';
import { PropertyDetailComponent } from './property/property-detail/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';

const routes: Routes = [
 {path:'add-property',component:AddPropertyComponent},
 {path:'',component:PropertyListComponent},
 {path:'rent-property',component:PropertyListComponent},
 {path:'property-detail/:id',component:PropertyDetailComponent},
 {path:'**',component:PropertyListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
