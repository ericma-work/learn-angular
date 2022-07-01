import { Component, OnInit } from '@angular/core';
import { TodoListChildComponent } from '../todo-list-child/todo-list-child.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  data:any[] = [{title: 'coffee', detail: 'just some coffee break'}];

  openDialog() {
    this.dialog.open(TodoListChildComponent);
  }

  addNew(val: any) {
    this.data.push(val);
  }
}
