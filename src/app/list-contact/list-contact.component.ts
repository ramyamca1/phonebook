import { Component, OnInit } from '@angular/core';
import { Contact } from '../model/user.model'; 
import { UserService } from '../services/contact.service';
 import { Router } from '@angular/router';

@Component({
  selector: 'app-list-contact',
  templateUrl: './list-contact.component.html',
  styleUrls: ['./list-contact.component.css']
})
export class ListContactComponent implements OnInit {
  users: Contact[];
  constructor(private router: Router, private contactService: UserService) { }

  ngOnInit() {
    if(localStorage.getItem("username")!=null)
    { this.contactService.getUsers() 
      .subscribe(data=> 
        { this.users = data; 
        });
       } 
       else 
       this.router.navigate(['/login']);
       }
        // logOff user
         logOutUser():void{
            if(localStorage.getItem("contactname")!=null){
               localStorage.removeItem("contactname"); 
               this.router.navigate(['/login']); 
              } 
            }
             // Delete User 
             deleteContact(user: Contact): void {
                let result = confirm('Do you want to delete the contact?')
                 if(result)
                  { 
                   this.contactService.deleteContact(user.id)
                    .subscribe( data =>
                       { this.users = this.users.filter(u => u !== user); 
                      }); 
                    }
                   };
                    // Modify USer
                     editcontact(user:Contact): void { 
                       localStorage.removeItem("edit-contactId");
                        localStorage.setItem("edit-contactId", user.id.toString());
                         this.router.navigate(['edit-contact']); 
                        }; 
                        // Add New User 
                        addcontact(): void {
                           this.router.navigate(['add-user']); };
}
  


