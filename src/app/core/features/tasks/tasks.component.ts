import { Component } from '@angular/core';
import {FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskService } from '../../services/task.service';

interface Task {
  id: number;
  description: string,
  completed: boolean
}

@Component({
  selector: 'app-tasks',
  standalone:true,
  imports: [],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  taskForm : FormGroup;
  tasks: Task[] = [];

}
