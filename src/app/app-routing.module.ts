import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { BusSearchResultComponent } from './user/bus-search-result/bus-search-result.component';
import { PrintComponent } from './user/print/print.component';
import { SelectBusComponent } from './user/select-bus/select-bus.component';

import { UserFormComponent } from './user/user-form/user-form.component';

const routes: Routes = [
 
  {path : 'home', component: HomeComponent},
  {path : 'signUp', component: SignUpComponent},
  {path : 'login', component: LoginComponent},
  {path:'',component:SelectBusComponent},
  {path:'search',component:BusSearchResultComponent},
  {path:'user-form',component:UserFormComponent},
  {path:'print',component:PrintComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
