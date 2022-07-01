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
  
  dataSource = []

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void { 
    this.getItems();

    this.itemService.dataEmitter.subscribe((value) => {
      this.displayData = value;
    })
  }
  
  getItems(): void {
    this.displayData = this.itemService.getAllItems();
  }

  handleDelete(val:any): void {
    this.displayData = this.itemService.deleteItem(val);
  }
}
