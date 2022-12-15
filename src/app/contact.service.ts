import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contact } from './contact';
import { Route, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  constructor(private httpClient: HttpClient ) {}

  private baseUrl = 'http://localhost:8080';

  getAllContact(): Observable<Contact[]> {
   // return this.httpClient.get<Contact[]>('${this.baseUrl}/contacts');
    return this.httpClient.get<Contact[]>(`${this.baseUrl}/contacts`); // '' is different and `` is differnt 
  }
  addContactDetails(contact: Contact): Observable<string> {
    console.log(contact);
    return this.httpClient.post(`${this.baseUrl}/contact`, contact, {
      responseType: 'text',
    });

  }

  deleteContact(contactId: number): Observable<string> {
    return this.httpClient.delete(`${this.baseUrl}/contact/${contactId}`, {
      responseType: 'text',
    });
  }

  getContactById(contactId: number): Observable<Contact> {
    return this.httpClient.get<Contact>(`${this.baseUrl}/contact/${contactId}`);
  }

  updateContactDetils(contact:Contact):Observable<string>{
    return this.httpClient.put(`${this.baseUrl}/contact`, contact, {
      responseType: 'text',
    });
  }

 
}
