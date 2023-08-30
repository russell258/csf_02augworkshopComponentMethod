import { Component, Input } from '@angular/core';
import { TaskClass } from '../task-class';

@Component({
  selector: 'app-tasklist',
  templateUrl: './tasklist.component.html',
  styleUrls: ['./tasklist.component.css']
})
export class TasklistComponent {

  @Input() taskList!: TaskClass[];



}
