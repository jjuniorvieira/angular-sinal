import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, switchMap, filter, map } from 'rxjs';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user-search',
  template: `
    <input (input)="onInput($event)" placeholder="Search user by ID" />
    <p *ngIf="user">{{ user.name }} - {{ user.email }}</p>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class UserSearchComponent implements OnInit {
  search$ = new Subject<string>();
  user: any;

  constructor(private http: HttpClient) {}

  onInput(event: Event): void {
    const target = event.target as HTMLInputElement;
    this.search$.next(target.value);
  }

  ngOnInit() {
    this.search$
      .pipe(
        filter(term => !!term && term.trim() !== ''),
        switchMap(id => // make sure to cancel previous requests when a new one is made
          this.http.get(`https://jsonplaceholder.typicode.com/users/${id}`)),
        map((user: any) => ({ name: user.name, email: user.email })),
      )
      .subscribe(user => (this.user = user));
  }
}
