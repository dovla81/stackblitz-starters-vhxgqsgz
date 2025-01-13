import { Injectable } from '@angular/core';
import {Task}  from '../models/task.model'

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  private tasks: Task[] = [];
  private nextId: number = 1;

  constructor() { }

  getTasks() : Task [] {
    return this.tasks;
  }

  getNextId() : number {
    return this.nextId++;
  }

  addTask( task : Task): void {
    this.tasks.push(task);
  }

  toggleCompleted(task : Task): void {
    const index = this.tasks.findIndex(t => t.id == task.id)
    if (index !== -1) {
      this.tasks[index].completed = !this.tasks[index].completed;
    }

  }

  deleteTask(task : Task) : void {
    this.tasks = this.tasks.filter(t => t.id !== task.id)
  }



}
