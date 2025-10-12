import {Component, NgModule, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { signal, computed } from '@angular/core';
import {filter, from, interval, map, mergeMap, of} from 'rxjs';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {BrowserModule} from '@angular/platform-browser';
import {UserSearchComponent} from './user-search.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HttpClientModule, UserSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone: true
})
export class AppComponent implements OnInit {

  title = 'my-app';
  counter = signal(0);
  price = signal(100);
  quantity = signal(2);
  total = computed(() => this.price() * this.quantity());

  constructor(private http: HttpClient) {
    // console.log('interval and takeUntilDestroyed');
    //
    // interval(1000) // create an observable that emits every second
    //   .pipe(takeUntilDestroyed()) // ensures the subscription stops when the component is destroyed; so no memory leaks
    //   .subscribe(value => console.log(value));
  }


  ngOnInit(): void {
    // console.log('filter and map');
    //   of(1, 2, 3, 4, 5) // create an observable
    //     .pipe( // chains
    //       filter(num => num % 2 === 0), // filter even numbers
    //       map(num => num * 10) // multiply by 10
    //     )
    //     .subscribe(result => console.log(result)); // Output: 20, 40

    console.log('mergeMap');
    const userIds = [1, 2, 3];
    from(userIds)
      .pipe(
        mergeMap(id => this.http.get( // takes each emitted value and maps it to an observable, then merge all these inner observables into one
          `https://jsonplaceholder.typicode.com/users/${id}`
        ))
      )
      .subscribe(user => console.log(user));
  }




  increment() {
    this.counter.update(value => value + 1); // increment by 1
    this.quantity.update(value => value + 1); // increment quantity by 1
     // Computed signal

  }
}
