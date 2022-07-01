import { Component, OnInit } from '@angular/core';
import { CalculatorServiceService } from '../calculator-service.service';

@Component({
  selector: 'app-calc-display',
  templateUrl: './calc-display.component.html',
  styleUrls: ['./calc-display.component.css']
})
export class CalcDisplayComponent implements OnInit {
  displayValue = 0;
  displayValueSmall = "";

  num1 = 0;
  num2 = 0;
  operator = '';

  constructor(private calcService: CalculatorServiceService) { }

  ngOnInit(): void {
    // this.calcService.dataEmitter.subscribe((val: any) => {
    //   if (!val.operator) {
    //     if (this.operator.length === 0) {
    //       this.displayValue = this.num1 * 10 + parseInt(val.value);
    //       this.num1 = this.num1 * 10 + parseInt(val.value);
    //     } else {
    //       this.displayValue = this.num2 * 10 + parseInt(val.value);
    //       this.num2 = this.num2 * 10 + parseInt(val.value);
    //     }
    //   } else { // operator pressed
    //     if (val.value === '=' && this.num2 !== 0) {
    //       if (this.operator === 'x') {
    //         this.displayValue = this.num1 * this.num2;
    //       } else if (this.operator === '+') {
    //         this.displayValue = this.num1 + this.num2;
    //       } else if (this.operator === '-') {
    //         this.displayValue = this.num1 - this.num2;
    //       } else if (this.operator === '/') {
    //         this.displayValue = this.num1 / this.num2;
    //       } else if (this.operator === '%') {
    //         this.displayValue = this.num1 % this.num2;
    //       }
    //     } 
    //     if (this.operator !== '='){ 
    //       this.operator = val.value;
    //     }
    //   }
    //   this.displayValueSmall += val.value;
    //   if (val.value === 'C') {
    //     this.displayValue = 0;
    //     this.displayValueSmall = '';
    //   }
    // })
  }

}
