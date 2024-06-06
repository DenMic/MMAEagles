import { Component } from '@angular/core';
import { TitlePageComponent } from '../../../share/title-page/title-page.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitlePageComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}
