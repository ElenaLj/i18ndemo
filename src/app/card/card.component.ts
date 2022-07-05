import { Component, Inject, LOCALE_ID } from '@angular/core';

export interface Item {
  name: string,
  quantity: number,
  price: number
}
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  currentDate = new Date();

  items: Item[] = [
    {
      name: $localize`:@@sunscreen:High protection sunscreen SPF50+`,
      quantity: 2,
      price: 35.90
    },
    {
      name: $localize`:@@nail-polish:Nail polish`,
      quantity: 3,
      price: 28.50
    },
    {
      name: $localize`:@@perfume:Lilac and lavander natural perfume`,
      quantity: 1,
      price: 13.30
    },
    {
      name: $localize`:@@shampoo:Shampoo for sensitive scalp`,
      quantity: 1,
      price: 15.90
    },
  ]

  constructor(@Inject(LOCALE_ID) public locale: string) { }
}
