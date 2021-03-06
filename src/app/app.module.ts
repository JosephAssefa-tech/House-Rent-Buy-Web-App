import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import { AddPropertyComponent } from './property/add-property/add-property/add-property.component';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HousingService } from './services/housing.service';
import {HttpClientModule} from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { NgModule } from '@angular/core';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyDetailComponent } from './property/property-detail/property-detail/property-detail.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { UserLoginComponent } from './user/user-login/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register/user-register.component';

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    PropertyListComponent,
    UserRegisterComponent,
    UserLoginComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule

  ],
  providers: [HousingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
