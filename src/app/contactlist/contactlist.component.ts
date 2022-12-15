import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactlist',
  templateUrl: './contactlist.component.html',
  styleUrls: ['./contactlist.component.css'],
})
export class ContactlistComponent {
  contacts: Contact[] = [];
  

  msg: string = '';
  constructor(private contactSevice: ContactService, private router: Router) {}

  ngOnInit(): void {
    this.getAllContactDetails();
  }

  //Get All Contacr
  getAllContactDetails() {
    this.contactSevice.getAllContact().subscribe((reponseData) => {
      this.contacts = reponseData;
    });
  }

  //Delete Contact
  deleteContact(id: number, contactName: string) {
    if (confirm('Are you sure to delete contact Name :' + contactName)) {
      this.contactSevice.deleteContact(id).subscribe((data) => {
        this.msg = data;
        this.getAllContactDetails();
      });
    }
  }

  editContact(id: number) {
    // this.router.navigate(['edit/', id]);
    this.router.navigate(['/edit', id]);
  }
}