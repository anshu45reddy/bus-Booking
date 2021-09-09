import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { BusSearchResultComponent } from './user/bus-search-result/bus-search-result.component';

import { PrintComponent } from './user/print/print.component';
import { SelectBusComponent } from './user/select-bus/select-bus.component';
import { SelectSeatComponent } from './user/select-seat/select-seat.component';
import { UserFormComponent } from './user/user-form/user-form.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ModalModule } from 'ngx-bootstrap/modal';
import { SelectBusService } from './user/services/selectBus.service';
import { BookingService } from './user/services/booking.service';
import { UserService } from './user/services/user.service';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { SignUpComponent } from './sign-up/sign-up.component';




@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    BusSearchResultComponent,
    PrintComponent,
    SelectBusComponent,
    SelectSeatComponent,
    UserFormComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    
 
  ],
  
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserModule,
    HttpClientModule,
    ModalModule.forRoot(),
    FormsModule,
   
  ],
  providers: [
    SelectBusService,
    BookingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

