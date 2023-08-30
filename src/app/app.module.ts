import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TodoComponent } from './components/todo.component';
import { TaskComponent } from './components/task.component';
import { TasklistComponent } from './components/tasklist.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    TaskComponent,
    TasklistComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
