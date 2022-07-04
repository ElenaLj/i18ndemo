import { Component } from '@angular/core';

export interface Pizza {
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

  pizzas: Pizza[] = [
    {
      name: $localize`:@@pizza-one:Pizza Hot Stuff`,
      quantity: 2,
      price: 18.90
    },
    {
      name: $localize`:@@pizza-one:Pizza Classic Pepperoni`,
      quantity: 3,
      price: 28.50
    },
    {
      name: $localize`:@@pizza-one:Pizza Very Veggie`,
      quantity: 1,
      price: 13.30
    },
    {
      name: $localize`:@@pizza-one:Pizza Tropical Hawaiian`,
      quantity: 1,
      price: 15.90
    },
  ]
}
