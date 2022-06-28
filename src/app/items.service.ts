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
    var inputData = val;    
    if (this.itemData === []) {
      inputData.id = 1;
      this.itemData.push(inputData);
    } else {
      var findIndex = this.itemData.findIndex(((obj: any) => obj.id == inputData.id));
      if (findIndex < 0) { // create new item
        var itemId = this.itemData[this.itemData.length - 1].id + 1;
        inputData.id = itemId
        this.itemData.push(inputData);
      } else { // edit item because item exist
        this.itemData[findIndex] = inputData;
      }
    }
    console.log("TESTTT", this.itemData);
  }

  deleteItem(val: any): Observable<ItemList[]> {
    var updatedData = [...this.itemData];
    for (var i = 0; i < this.itemData.length; i++) {
      if (updatedData[i].id === val.id) {
        updatedData.splice(i, 1);
        this.itemData = updatedData;
        break;
      }
    }
    const items = of(this.itemData);
    return items;
  }

  
  // deleteItem(val: any) {
  //   var updatedData = [...this.itemData];
  //   for (var i = 0; i < this.itemData.length; i++) {
  //     if (updatedData[i].id === val.id) {
  //       updatedData.splice(i, 1);
  //       this.itemData = updatedData;
  //       break;
  //     }
  //   }
  // }
}
