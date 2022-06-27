import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

export interface ItemList {
  id: number,
  name: string;
  price: number;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  
  displayedColumns: string[] = ['id', 'name', 'price', 'action'];

  displayData: ItemList[] = [];
  
  dataSource = JSON.parse(localStorage.getItem('data') || "");

  constructor() { }

  ngOnInit(): void { }

  handleDelete(val: any) {
    var updatedData = [...this.dataSource];

    for (var i = 0; i < this.dataSource.length; i++) {
      if (updatedData[i].id === val.id) {
        updatedData.splice(i, 1);
        this.dataSource = updatedData;
        break;
      }
    }
    localStorage.setItem('data', JSON.stringify(updatedData));
  }

  handleEdit(val: any) {
    localStorage.setItem('editItemData', JSON.stringify(val));
  }
}
