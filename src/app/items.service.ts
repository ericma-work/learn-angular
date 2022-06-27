import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  // private eventData = [
  //   { id: 1, name: 'chicken', price: 150},
  //   { id: 2, name: 'turkey', price: 320 },
  //   { id: 3, name: 'roast beef', price: 500 }
  // ]

  private itemData = JSON.parse(localStorage.getItem('data') || "");
  constructor() { }

  getItems() {
    const items = of(this.itemData);
    return items;
  }

  // addItems(val: any) {
  //   this.itemData.push(val);
  //   localStorage.setItem('data', this.itemData);
  // }

  // deleteItem(val: any) {
  //   var updatedData = [...this.itemData];

  //   for (var i = 0; i < this.itemData.length; i++) {
  //     if (updatedData[i].id === val.id) {
  //       updatedData.splice(i, 1);
  //       this.itemData = updatedData;
  //       break;
  //     }
  //   }
  //   localStorage.setItem('data', JSON.stringify(updatedData));
  //   return updatedData;
  // }
}
