import { Component } from '@angular/core';
import { TitlePageComponent } from '../../../share/title-page/title-page.component';

@Component({
  selector: 'app-kids',
  standalone: true,
  imports: [TitlePageComponent],
  templateUrl: './kids.component.html',
  styleUrl: './kids.component.css',
})
export class KidsComponent {}
