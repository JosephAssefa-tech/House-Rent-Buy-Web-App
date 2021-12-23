import {RouterModule, Routes} from '@angular/router';

import { AddPropertyComponent } from './property/add-property/add-property/add-property.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HousingService } from './services/housing.service';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserregisterComponent } from './user/user-login/userregister/userregister.component';
import { UserRegisterComponent } from './user/user-login/user-register/user-register.component';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    NavBarComponent,
    AddPropertyComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PropertyDetailComponent,
    UserregisterComponent,
    UserRegisterComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,

  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
