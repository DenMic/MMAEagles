import { Component } from '@angular/core';
import { TitlePageComponent } from '../../../share/title-page/title-page.component';

@Component({
  selector: 'app-mma',
  standalone: true,
  imports: [TitlePageComponent],
  templateUrl: './mma.component.html',
  styleUrl: './mma.component.css',
})
export class MmaComponent {}
