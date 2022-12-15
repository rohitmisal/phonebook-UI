import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contact } from '../contact';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contactedit',
  templateUrl: './contactedit.component.html',
  styleUrls: ['./contactedit.component.css'],
})
export class ContacteditComponent {
  contact: Contact = new Contact();
  id: number = 0;
  constructor(
    private contactService: ContactService,
    private router: Router,
    private activeRoute: ActivatedRoute
  ) {}
  ngOnInit(): void {
    this.getContact();
  }
  getContact() {
    this.id = this.activeRoute.snapshot.params['id'];
    this.contactService.getContactById(this.id).subscribe((data) => {
      this.contact = data;
    });
  }

  updateContact(){
    this.contactService.updateContactDetils(this.contact).subscribe(data=>{
    this.router.navigate(['/contacts'])   
    })
  }
  

}
