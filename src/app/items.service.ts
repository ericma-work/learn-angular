import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';

export interface ItemList {
  id: number,
  name: string;
  price: number;
}

const ITEM_DATA: ItemList[] = [

]

@Injectable({
  providedIn: 'root'
})
export class ItemsService {
  itemData: ItemList[] = [];
  dataEmitter = new Subject<ItemList[]>();

  constructor() { }

  getAllItems() {
    return this.itemData;
  }

  addItem(val: any) {
    // make a copy of the input
    var inputData = {...val}; 
    
    if (this.itemData.length === 0) { // data storage is empty
      inputData.id = 1; // set id to 1
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
    this.dataEmitter.next(this.itemData);
  }

  deleteItem(val: any): ItemList[] {
    // make a copy of the data storage
    var updatedData = [...this.itemData];

    // find the location of the deleted value in the data storage array
    var findIndex = updatedData.findIndex(((obj: any) => obj.id == val.id));

    // delete the value
    updatedData.splice(findIndex, 1);

    // update the data storage;
    this.itemData = updatedData;

    // return updated data to the view
    return this.itemData;
  }
}
