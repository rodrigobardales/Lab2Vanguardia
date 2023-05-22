import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {
  @Input() contacts!: Contact[];
  @Output() filteredContacts = new EventEmitter<Contact[]>();
  constructor() {
    this.contacts = [];
  }
  searchText = '';

  filterContacts() {
    const filtered = this.contacts.filter(contact => {
      return (
        contact.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
        contact.email.toLowerCase().includes(this.searchText.toLowerCase()) ||
        contact.phone.toLowerCase().includes(this.searchText.toLowerCase())
      );
    });
    this.filteredContacts.emit(filtered);
  }

  clearSearch() {
    this.searchText = '';
    this.filterContacts();
  }
}
