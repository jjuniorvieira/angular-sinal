import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, computed } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  counter = signal(0);
  price = signal(100);
  quantity = signal(2);
  total = computed(() => this.price() * this.quantity());
 

  increment() {
    this.counter.update(value => value + 1); // increment by 1
    this.quantity.update(value => value + 1); // increment quantity by 1
     // Computed signal

  }
}
