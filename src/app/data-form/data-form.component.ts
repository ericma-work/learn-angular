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
          if (Object.keys(params).length > 0) {
            this.itemId = params['id'];
            this.itemName = params['name'];
            this.itemPrice = params['price'];
          }
        })
  }

  onInputFoodName = (val: string) => {
    this.itemName = val;
  }

  onInputFoodPrice = (val: string) => {
    this.itemPrice = Number(val);
  }

  addItem() {
    var res = { id: this.itemId, name: this.itemName, price: this.itemPrice };
    this.itemService.addItem(res)
  }
}
