import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface ItemList {
  id: number,
  name: string;
  price: number;
}

const ITEM_DATA: ItemList[] = [
  { id: 1, name: 'chicken', price: 150},
  { id: 2, name: 'turkey', price: 320 },
  { id: 3, name: 'roast beef', price: 520 }
]

@Injectable({
  providedIn: 'root'
})
export class ItemsService {


  // private itemData = JSON.parse(localStorage.getItem('data') || "");
  private itemData: ItemList[] = [
    { id: 1, name: 'chicken', price: 150},
    { id: 2, name: 'turkey', price: 310 },
    { id: 3, name: 'roast beef', price: 520 }
  ];
  constructor() { }

  getItems(): Observable<ItemList[]> {
    const items = of(this.itemData);
    return items
  }

  addItem(val: any) {
    this.itemData.push(val);
  }

  deleteItem(val: any) {
    var updatedData = [...this.itemData];
    console.log("BEFORE:", this.itemData);
    for (var i = 0; i < this.itemData.length; i++) {
      if (updatedData[i].id === val.id) {
        updatedData.splice(i, 1);
        this.itemData = updatedData;
        break;
      }
    }
    console.log("AFTER: ", this.itemData);

  }
}
