import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-add-todo-item',
  templateUrl: './add-todo-item.component.html',
  styleUrls: ['./add-todo-item.component.css']
})
export class AddTodoItemComponent implements OnInit {

  title: string = '';

  @Output() todoAdd: EventEmitter<Todo> = new EventEmitter();

  
  constructor() { }

  ngOnInit(): void {
  }


  onSubmit() {
    
    const todo = {
      id: 4,
      title: this.title,
      completed: false
    }

    this.todoAdd.emit(todo);


  }

}
