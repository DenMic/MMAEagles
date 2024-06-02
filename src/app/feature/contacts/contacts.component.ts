import { Component } from '@angular/core';
import { TitlePageComponent } from '../../../share/title-page/title-page.component';

@Component({
  selector: 'app-contacts',
  standalone: true,
  imports: [TitlePageComponent],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.css',
})
export class ContactsComponent {}
