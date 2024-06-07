import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { TopMenuComponent } from '../share/top-menu/top-menu.component';
import { FooterComponent } from '../share/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, TopMenuComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'ngx-mma-eagles';
}
