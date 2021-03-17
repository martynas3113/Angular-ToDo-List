import { Component, OnInit, Input } from '@angular/core';
import { Todo } from 'src/app/models/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  //Set dynamic Classes
  setClasses(){
    let classes = {
      todo: true,
      'is-complete': this.todo.completed
    }
    return classes;
  }

  //onToggle
  onToggle(todo){
    todo.completed = !todo.completed;
  }
  //onDelete
  onDelete(todo){
    console.log('delete');
  }

}
