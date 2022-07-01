import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorServiceService {

  constructor() { }

  dataEmitter = new Subject();
  onButtonPressed(val: any) {
    this.dataEmitter.next(val);
    console.log(val);
  }
}

