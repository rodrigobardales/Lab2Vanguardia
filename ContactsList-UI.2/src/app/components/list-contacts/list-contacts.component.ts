import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-list-contacts',
  templateUrl: './list-contacts.component.html',
  styleUrls: ['./list-contacts.component.css']
})
export class ListContactsComponent {

  @Input() contacts: Contact[];
  @Output() toggleForm = new EventEmitter<void>();
  @Output() contactSelected = new EventEmitter<Contact>();

  filteredContacts: Contact[] = [];

  onFilter(contacts: Contact[]): void {
    this.filteredContacts = contacts;
  }

  selectContact(contact: Contact): void {
   this.contactSelected.emit(contact);
  }

  deleteContact(contact: Contact): void {

  }

  showForm(): void {
    this.toggleForm.emit();
  }
}
