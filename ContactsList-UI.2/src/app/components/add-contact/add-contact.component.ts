import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Contact } from 'src/app/models/contact';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent {

  @Output() contactAdded = new EventEmitter<Contact>();
  @Output() cancel = new EventEmitter<void>();

  @Input() contact: Contact = {
    name: '',
    email: '',
    phone: '',
    title: ''
  };

  @Input() mode: 'add' | 'edit' = 'add';

  emailPattern = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  saveContact() {
    if (this.validateContact()) {
      this.contactAdded.emit({...this.contact});
      this.resetForm();
    }
  }

  cancelAddContact() {
    this.resetForm();
    this.cancel.emit();
  }

  private validateContact(): boolean {
    // Validations logic here
    return true;
  }

  private resetForm() {
    this.contact = {
      name: '',
      email: '',
      phone: '',
      title: ''
    };
  }

}
