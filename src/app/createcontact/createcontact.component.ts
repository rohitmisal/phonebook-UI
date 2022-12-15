import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-createcontact',
  templateUrl: './createcontact.component.html',
  styleUrls: ['./createcontact.component.css'],
})
export class CreatecontactComponent {
  ngOnInit(): void {}

  contact: Contact = new Contact();
  msg: string = '';
  constructor(private contactService: ContactService, private router: Router) {}

  onSubmit() {
    console.log('Onside Onsubmit');

    console.log(this.contact);
    this.contactService.addContactDetails(this.contact).subscribe((data) => {
      this.msg = data;
      this.redirecToViewConacts();
    });
  }

  redirecToViewConacts() {
    this.router.navigate(['/contacts']);
  }
}
