import { Component, inject } from '@angular/core';
import { TitlePageComponent } from '../../../share/title-page/title-page.component';
import { CardStyleComponent } from './child/card-style/card-style.component';
import { Router } from '@angular/router';
import { CardTranerComponent } from './child/card-traner/card-traner.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [TitlePageComponent, CardStyleComponent, CardTranerComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  private readonly router = inject(Router);

  cardStyleClick(urlPage: string) {
    this.router.navigate([urlPage]);
  }
}
