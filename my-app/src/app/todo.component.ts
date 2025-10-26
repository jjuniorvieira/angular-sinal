import { Component, signal, computed } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-todo',
  template: `
    <h3>Todo List ({{ totalTasks() }} total / {{ completedTasks() }} done)</h3>
    <ul>
      <li *ngFor="let task of tasks()">
        <input type="checkbox" [(ngModel)]="task.done" />
        {{ task.title }}
      </li>
    </ul>
  `,
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class TodoComponent {
  tasks = signal([
    { title: 'Learn Signals', done: true },
    { title: 'Practice Computed', done: false },
    { title: 'Build Angular App', done: false },
  ]);

  totalTasks = computed(() => this.tasks().length);
  completedTasks = computed(() => this.tasks().filter(t => t.done).length);
}
