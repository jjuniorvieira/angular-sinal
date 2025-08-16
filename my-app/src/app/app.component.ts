import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';

  counter = signal(0);

  increment() {
    this.counter.update(value => value + 1); // increment by 1
  }
}
