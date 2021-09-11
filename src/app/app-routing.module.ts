import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BusSearchResultComponent } from './book-tickets/user/bus-search-result/bus-search-result.component';
import { PrintComponent } from './book-tickets/user/print/print.component';
import { SelectBusComponent } from './book-tickets/user/select-bus/select-bus.component';

import { UserFormComponent } from './book-tickets/user/user-form/user-form.component';
import { BookTicketsComponent } from './book-tickets/book-tickets.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  {path :'', redirectTo:'/home' , pathMatch: "full"},
  {path : 'home', component: HomeComponent},
  {path : 'signUp', component: SignUpComponent},
  {path : 'login', component: LoginComponent},
  {path : 'profile', component:ProfileComponent},
  {
    path: 'book',
    component: BookTicketsComponent,
    children: [
     {path:'',component:SelectBusComponent},    
  
    ]
  }, 
     {path:'search',component:BusSearchResultComponent},
     {path:'user-form',component:UserFormComponent},
     {path:'print',component:PrintComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
