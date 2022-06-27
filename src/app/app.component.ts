import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

export interface FoodInfo {
  id: number;
  name: string;
  price: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  constructor(private router: Router) {}

  pageHeader() {
    if (localStorage.getItem('editItemData') === null && this.router.url === '/') {
      return 'Some Table';
    }
    if (localStorage.getItem('editItemData') === null) {
      return "Add Item";
    }
    return "Edit Item";
  }
}
