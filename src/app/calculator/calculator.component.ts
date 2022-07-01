import { Component, OnInit } from '@angular/core';

const CALC_BUTTONS = [
  { value: 'BACK', operator: true },
  { value: 'C', operator: true },
  { value: '%', operator: true },
  { value: '/', operator: true },
  { value: '7', operator: false },
  { value: '8', operator: false },
  { value: '9', operator: false },
  { value: 'x', operator: true },
  { value: '4', operator: false },
  { value: '5', operator: false },
  { value: '6', operator: false },
  { value: '-', operator: true },
  { value: '1', operator: false },
  { value: '2', operator: false },
  { value: '3', operator: false },
  { value: '+', operator: true },
  { value: '+/-', operator: true },
  { value: '0', operator: false },
  { value: '.', operator: false },
  { value: '=', operator: true }
];

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  buttonData = CALC_BUTTONS
  displayValue = 0;
  displayValueSmall = "\u00A0";

  num1 = 0;
  num2 = 0;
  operator = '';



  constructor() { }
  ngOnInit(): void {

  }

  buttonClicked(val:any) {
    if (!val.operator) { // it's a number
      if (this.operator.length === 0 ) {
        this.displayValue = this.num1 * 10 + parseInt(val.value);
        this.num1 = this.num1 * 10 + parseInt(val.value);
      } else {
        this.displayValue = this.num2 * 10 + parseInt(val.value);
        this.num2 = this.num2 * 10 + parseInt(val.value);
      }
    } else { // operator pressed
      if (this.operator === '=') {
        this.num1 = this.displayValue;
        this.num2 = 0;
      }
      if (val.value === '=' && this.num2 !== 0) { // equals
        if (this.operator === 'x') {
          this.displayValue = this.num1 * this.num2;
        } else if (this.operator === '+') {
          this.displayValue = this.num1 + this.num2;
        } else if (this.operator === '-') {
          this.displayValue = this.num1 - this.num2;
        } else if (this.operator === '/') {
          this.displayValue = this.num1 / this.num2;
        } else if (this.operator === '%') {
          this.displayValue = this.num1 % this.num2;
        }
        this.num1 = this.displayValue;
      } 
      this.operator = val.value;

    }
    if (val.value !== '=') {
      this.displayValueSmall += val.value;
    }

    if (val.value === 'C') {
      this.reset();
    }
  }

  reset() {
    this.displayValue = 0;
    this.displayValueSmall = '\u00A0';
    this.displayValue = 0;
    this.num1 = 0;
    this.num2 = 0;
    this.operator = '';
  }
}
