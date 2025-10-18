import { Component, signal, computed } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-user',
  template: `
    <p>First name: {{ firstName() }}</p>
    <p>Last name: {{ lastName() }}</p>
    <p><strong>Full name: {{ fullName() }}</strong></p>
    <button (click)="changeName()">Change Name</button>
  `,
  standalone: true,
  imports: [CommonModule]
})
export class UserComponent {
  firstName = signal('Daniele');
  lastName = signal('Maraschin');

  // Computed signal: depends on firstName and lastName
  fullName = computed(() => `${this.firstName()} ${this.lastName()}`);

  changeName() {
    this.firstName.set('JJ');
  }
}
