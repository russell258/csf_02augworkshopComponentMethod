import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TaskClass } from '../task-class';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit{


  @Output() createNewToDo=new EventEmitter;

  todoForm!: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(){
    this.todoForm= this.fb.group({
      description: this.fb.control<string>('',[Validators.required,Validators.minLength(5)]),
      priority: this.fb.control<string>('Low',[Validators.required]),
      due: this.fb.control<Date>(new Date(),[Validators.required])
    });
  }

  addForm(){
    console.log(this.todoForm.value);
    this.createNewToDo.emit(this.todoForm.value);
  }



}
