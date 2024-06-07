import { Component, Renderer2, computed, inject, signal } from '@angular/core';
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
  cssScrollOffsetY = computed(() => {
    if (this.enableMobileMenu()) {
      return 'left: 0px; top: ' + window.scrollY + 'px;';
    }

    return 'left: 0px; top: 0px;';
  });

  toggleMobileMenu(): void {
    this.enableMobileMenu.set(!this.enableMobileMenu());

    if (this.enableMobileMenu()) {
      this.renderer.setStyle(document.body, 'overflow', 'hidden');
    } else {
      this.renderer.setStyle(document.body, 'overflow', 'auto');
    }
  }
}
