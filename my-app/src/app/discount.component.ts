import { Component, signal, computed } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-discount',
  template: `
    <p>Price: {{ price() }}</p>
    <p>Discount: {{ discount() * 100 }}%</p>
    <p>Discounted price: {{ discountedPrice() }}</p>
    <p>Tax: {{ taxRate() * 100 }}%</p>
    <p><strong>Final price: {{ finalPrice() }}</strong></p>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class DiscountComponent {
  price = signal(100);
  discount = signal(0.1);
  taxRate = signal(0.2);

  discountedPrice = computed(() => this.price() * (1 - this.discount()));
  finalPrice = computed(() => this.discountedPrice() * (1 + this.taxRate()));
}
