import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ItemsService } from '../items.service';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  itemId = 0; 
  itemName = "";
  itemPrice = 0

  constructor(private route: ActivatedRoute, private itemService: ItemsService) {

  }

  ngOnInit(): void { 
    this.route.queryParams
        .subscribe(params => {
          this.itemId = params['id'];
          this.itemName = params['name'];
          this.itemPrice = params['price'];
        })
  }

  onInputFoodName = (val: string) => {
    this.itemName = val;
  }

  onInputFoodPrice = (val: string) => {
    this.itemPrice = Number(val);
  }

  addNewItem = () => {
    var res = { id: this.itemId, name: this.itemName, price: this.itemPrice };
    
    if (localStorage.getItem('data') === "[]") {
      res.id = 1;
      localStorage.setItem('data', JSON.stringify([res]));
    } else {
      var currData = JSON.parse(localStorage.getItem('data') || "");
      var findIndex = currData.findIndex(((obj: any) => obj.id == this.itemId));
      if (findIndex < 0) { // create new item
        var itemId = currData[currData.length - 1].id + 1;
        res.id = itemId
        currData.push(res);
      } else { // edit item because item exist
        currData[findIndex] = res;
      }
      localStorage.setItem('data', JSON.stringify(currData));
    }
    localStorage.removeItem('editItemData');
  }

  handleBackToMain() {
    localStorage.removeItem('editItemData');
  }

  addItem() {
    var res = { id: this.itemId, name: this.itemName, price: this.itemPrice };
    this.itemService.addItem(res)
  }
}
