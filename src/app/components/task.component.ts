import { Component } from '@angular/core';
import { TaskClass } from '../task-class';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent {

  toDoArray: TaskClass[]=[];

  ngOnInit(){
    this.toDoArray=[];
  }

  addToDo(todo: TaskClass){
    // the ... means the contents of the toDoArray before inserting the new todo.
    // doesn't use .push as this method changes reference of the array which will make Angular render again.
    this.toDoArray=[...this.toDoArray,todo];
  }

}
