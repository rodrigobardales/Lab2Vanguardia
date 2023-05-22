import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {

  @Input() contact: Contact;
  @Output() deletedContact = new EventEmitter<Contact>();
  @Output() edittedContact = new EventEmitter<Contact>();

  deleteContact(): void {
    this.deletedContact.emit(this.contact);
  }

  editContact(): void {
    this.edittedContact.emit(this.contact);
  }
}
