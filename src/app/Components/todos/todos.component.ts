import { Component, OnInit } from '@angular/core';
import { Todo } from 'src/app/Models/Todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {
  
  todos: Todo[];
  
  constructor() {

    this.todos = localStorage.getItem('todos') !== null ? JSON.parse(localStorage.getItem('todos')!) : [];
  }

  ngOnInit(): void {
  }

  todoDelete(todo: Todo) {
    console.log(todo);

    const index = this.todos.indexOf(todo);
    this.todos.splice(index, 1);

    // add todos to local storage
    localStorage.setItem('todos', JSON.stringify(this.todos));
    
  }

  todoAdd(todo: Todo) {
    console.log(todo);

    this.todos.push(todo);

    // add todos to local storage
    localStorage.setItem('todos', JSON.stringify(this.todos));

  }

}
