import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { FilterComponent } from './components/flter/filter.component';
import { ListContactsComponent } from './components/list-contacts/list-contacts.component';
import { MyRootComponent } from './components/my-root/my-root.component';
import { FormsModule } from '@angular/forms';
import { ContactDetailComponent } from './components/contact-detail/contact-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    AddContactComponent,
    FilterComponent,
    ListContactsComponent,
    MyRootComponent,
    ContactDetailComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
