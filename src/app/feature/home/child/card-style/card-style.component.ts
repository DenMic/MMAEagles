import { Component, input, output } from '@angular/core';

@Component({
  selector: 'card-style',
  standalone: true,
  imports: [],
  templateUrl: './card-style.component.html',
  styleUrl: './card-style.component.css',
})
export class CardStyleComponent {
  image = input.required<string>();
  text = input.required<string>();

  onClick = output();
}
