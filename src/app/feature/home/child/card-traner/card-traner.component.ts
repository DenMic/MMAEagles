import { Component, input } from '@angular/core';

@Component({
  selector: 'card-traner',
  standalone: true,
  imports: [],
  templateUrl: './card-traner.component.html',
  styleUrl: './card-traner.component.css',
})
export class CardTranerComponent {
  image = input.required<string>();
  nome = input.required<string>();
  cintura = input.required<string>();
  descrizione = input.required<string>();
}
