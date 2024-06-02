import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
})
export class TopMenuComponent {
  enableMobileMenu = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.enableMobileMenu.set(!this.enableMobileMenu());
  }
}
