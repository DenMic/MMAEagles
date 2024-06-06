import { Component, Renderer2, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-top-menu',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
})
export class TopMenuComponent {
  private renderer: Renderer2 = inject(Renderer2);

  enableMobileMenu = signal<boolean>(false);

  toggleMobileMenu(): void {
    this.enableMobileMenu.set(!this.enableMobileMenu());

    if (this.enableMobileMenu()) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.setStyle(document.body, 'overflow', 'auto');
    }
  }
}
