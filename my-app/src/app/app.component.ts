import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, computed } from '@angular/core';
import {filter, map, of} from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {

  title = 'my-app';
  counter = signal(0);
  price = signal(100);
  quantity = signal(2);
  total = computed(() => this.price() * this.quantity());


  ngOnInit(): void {
      of(1, 2, 3, 4, 5) // create an observable
        .pipe( // chains
          filter(num => num % 2 === 0), // filter even numbers
          map(num => num * 10) // multiply by 10
        )
        .subscribe(result => console.log(result)); // Output: 20, 40
  }




  increment() {
    this.counter.update(value => value + 1); // increment by 1
    this.quantity.update(value => value + 1); // increment quantity by 1
     // Computed signal

  }
}
