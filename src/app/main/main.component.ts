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
  
  dataSource = JSON.parse(localStorage.getItem('data') || "");

  constructor(private itemService: ItemsService) { }

  ngOnInit(): void { 
    this.getItems();
  }
  // handleDelete(val: any) {
  //   var updatedData = [...this.dataSource];

  //   for (var i = 0; i < this.dataSource.length; i++) {
  //     if (updatedData[i].id === val.id) {
  //       updatedData.splice(i, 1);
  //       this.dataSource = updatedData;
  //       break;
  //     }
  //   }
  //   localStorage.setItem('data', JSON.stringify(updatedData));
  // }

  getItems(): void {
    this.itemService.getItems()
        .subscribe(items => this.displayData = items);
  }

  handleEdit(val: any) {
    localStorage.setItem('editItemData', JSON.stringify(val));
  }

  handleDelete(val:any) {
    this.itemService.deleteItem(val);
  }


}
