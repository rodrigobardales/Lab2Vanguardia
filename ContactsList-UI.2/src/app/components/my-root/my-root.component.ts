import { Component } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-my-root',
  templateUrl: './my-root.component.html',
  styleUrls: ['./my-root.component.css']
})
export class MyRootComponent {
  pageTitle = 'Lista de Contactos';
  contacts: Contact[] = [
    {name:'Rodrigo Bardales', email:'rodrigo.bardales@mail.com',phone:'99999999', title:'Sr'},
    {name:'John Doe', email:'jdoe@mail.com',phone:'88888888', title:'Sr'},
    {name:'Sara Doe', email:'sdoe@mail.com',phone:'77777777', title:'Sra'}
  ];
  showAddContact = false;
  selectedContact: Contact;
  showEditContact = false;
  contactToEdit: Contact;

  addContact(contact: Contact): void {

    this.contacts.push(contact);

    this.showAddContact = false;
  }

  deleteContact(): void {
   this.contacts = this.contacts.filter((contact: Contact) => contact !== this.selectedContact);
  }

  selectContact(contact: Contact): void {
    this.selectedContact = contact;
  }

  editContact(contact: Contact): void {
    this.showEditContact = true;
    this.contactToEdit = contact;
  }
}
