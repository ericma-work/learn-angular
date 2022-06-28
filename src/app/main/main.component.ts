import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { ItemsService } from '../items.service';


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
  
  // dataSource = JSON.parse(localStorage.getItem('data') || "");
  dataSource = []

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void { 
    this.getItems();
  }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.displayData = items);
  }

  handleEdit(val: any) {
    localStorage.setItem('editItemData', JSON.stringify(val));
  }

  handleDelete(val:any): void {
    this.itemService.deleteItem(val)
        .subscribe(items => {
          this.displayData = items
        });
  }

  // handleDelete(val:any): void {
  //   this.itemService.deleteItem(val);
  // }
}
