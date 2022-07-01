import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemsService } from '../items.service';
import { HasValuePipe } from '../pipes/hasvalue.pipe';

@Component({
  selector: 'app-data-form',
  templateUrl: './data-form.component.html',
  styleUrls: ['./data-form.component.css']
})
export class DataFormComponent implements OnInit {
  formType = "";

  itemId = 0; 
  itemName = "";
  itemPrice = 0

  error = ""

  constructor(private route: ActivatedRoute, 
              private router: Router,
              private itemService: ItemsService,
              private hasValuePipe: HasValuePipe) { }

  ngOnInit(): void { 
    this.route.queryParams
        .subscribe(params => {
          this.formType = params['form'];
          if (params['form'] === 'edit') {
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
    if (this.hasValuePipe.transform(this.itemName) && this.itemPrice > 0) {
      this.itemService.addItem(res);
      this.error = "";
      this.router.navigate([''])
    } else {
      if (!this.hasValuePipe.transform(this.itemName) && this.itemPrice === 0) {
        this.error = "Please input the ITEM NAME and the PRICE";
      } else if (this.itemPrice === 0) {
        this.error = "Please input the PRICE of the item (PRICE has to be greater than 0)";
      } else {
        this.error = "Please input the ITEM NAME"
      }
    }
  }
}
