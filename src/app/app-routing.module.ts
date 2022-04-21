import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from "./login/login.component"; 
import {AddContactComponent} from "./add-contact/add-contact.component"; 
import {ListContactComponent} from "./list-contact/list-contact.component"; 
import{EditContactComponent} from "./edit-contact/edit-contact.component";
import { HomeComponent } from './home/home.component';
const routes: Routes = [ { path: '',component: HomeComponent },  
{ path: 'login', component: LoginComponent },
 { path: 'add-contact', component: AddContactComponent }, 
 { path: 'list-contact', component: ListContactComponent }, 
 { path: 'edit-contact', component: EditContactComponent },
  
 { path: 'home',component:HomeComponent},

 ]; 
 //export const routing = RouterModule.forRoot(routes);
 @NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
 })
 export class AppRoutingModule { }
 


