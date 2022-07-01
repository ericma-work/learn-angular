import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-todo-list-child',
  templateUrl: './todo-list-child.component.html',
  styleUrls: ['./todo-list-child.component.css']
})
export class TodoListChildComponent implements OnInit {
  @Output() dataEmitter = new EventEmitter();
  noteTitle = '';
  noteDetail = '';

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }

  onTitleChange(val: any) {
    this.noteTitle = val;
  }

  onDetailChange(val: any) {
    this.noteDetail = val;
  }

  addNew() {
    this.dataEmitter.emit({title: this.noteTitle, detail: this.noteDetail})
    this.dialog.closeAll();
  }
}
