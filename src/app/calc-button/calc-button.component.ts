import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CalculatorServiceService } from '../calculator-service.service';

@Component({
  selector: 'app-calc-button',
  templateUrl: './calc-button.component.html',
  styleUrls: ['./calc-button.component.css']
})
export class CalcButtonComponent implements OnInit {
  @Input() buttons: any = [];
  @Output() dataEmitter = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  handleClickButton(val: any) {
    this.dataEmitter.emit(val);
    // this.calcService.onButtonPressed(val);
  }
}
