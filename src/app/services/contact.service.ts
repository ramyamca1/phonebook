import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';
 import { Contact } from '../model/user.model';
  @Injectable() 
  export class UserService { 
    constructor(private http:HttpClient) { } 
    baseUrl:string = 'http://localhost:3000/users'; 
    // Get All Users 
    getUsers(){ 
      return this.http.get<Contact[]>(this.baseUrl); 
    } 
      // Get User By Id 
      getUserById(id: number){ 
        return this.http.get<Contact>(this.baseUrl+'/'+id); 
      } // Create Contact 
      createContact(user: Contact) {
         return this.http.post(this.baseUrl, user);
         } // Modify Contact
         updateContact(user: Contact) {
            return this.http.put(this.baseUrl + '/' + user.id, user); 
          }
// Delete Contact
deleteContact(id: number) { 
  return this.http.delete(this.baseUrl + '/' + id);
}


 } 

