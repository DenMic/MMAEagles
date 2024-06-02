import { Component } from '@angular/core';
import { TitlePageComponent } from '../../../share/title-page/title-page.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  imports: [TitlePageComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.css',
})
export class AboutUsComponent {}
