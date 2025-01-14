import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule, FormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';
import {Task}  from '../../models/task.model'

@Component({
  selector: 'app-tasks',
  standalone:true,
  imports: [CommonModule, ReactiveFormsModule, FormsModule], // Added FormsModule
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  taskForm : FormGroup;
  tasks: Task[] = [];

  constructor(private fb : FormBuilder, private taskService : TaskService) {
    
    this.taskForm = this.fb.group({
      description: ['', Validators.required]
    })

    this.tasks = this.taskService.getTasks();

  }

  addTask() {
    if (this.taskForm.valid) {

      const newTask : Task = {
        id: this.taskService.getNextId(),
        description: this.taskForm.value.description,
        completed: false
      }

      this.taskService.addTask(newTask);
      this.taskForm.reset();
    }

  }

  toggleComplete(task: Task) {
    this.taskService.toggleCompleted(task)
  }

  deleteTask(task : Task) {
    console.log("Deleting task:", task);
    console.log("Deleting task: " + JSON.stringify(task));
    this.taskService.deleteTask(task);
    this.tasks = this.taskService.getTasks();  // Refresh the tasks array
  }
  

}
