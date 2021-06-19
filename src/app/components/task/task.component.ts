import { Component, OnInit } from '@angular/core';

import { TASKS } from '../../test-tasks';
import { Task } from '../../Task';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent implements OnInit {
  tasks: Task[] = TASKS;
  constructor() {}

  ngOnInit(): void {
  }
}
