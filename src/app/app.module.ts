import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
  import { LoginComponent } from './login/login.component';
   import { AddContactComponent } from './add-contact/add-contact.component';
   import { EditContactComponent } from './edit-contact/edit-contact.component';
    import { ListContactComponent } from './list-contact/list-contact.component';
    import { ReactiveFormsModule } from '@angular/forms'; 
    import { HttpClientModule } from '@angular/common/http'; 
    import { UserService } from './services/contact.service'; 
    import { HomeComponent } from './home/home.component';
     @NgModule({
        declarations: [
          AppComponent, 
          LoginComponent,
           AddContactComponent,
            EditContactComponent,
             ListContactComponent, 
             HomeComponent], 
             imports: [
               BrowserModule, 
                ReactiveFormsModule, 
                
                 HttpClientModule
                ],
                 providers: [UserService],
                  bootstrap: [AppComponent]
                 }) 
                 export class AppModule { }