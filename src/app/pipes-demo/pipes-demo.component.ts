import { Component, OnInit } from '@angular/core';
import { HasValuePipe } from '../pipes/hasvalue.pipe';

const INPUT = [
  [1, 2, 3, 4],
  [],
  {},
  {name: 'Rakuten', domain: 'rcp'},
  "undefined",
  "",
  undefined,
  null
]

@Component({
  selector: 'app-pipes-demo',
  templateUrl: './pipes-demo.component.html',
  styleUrls: ['./pipes-demo.component.css']
})
export class PipesDemoComponent implements OnInit {

  data: any = [];
  constructor(private pipe: HasValuePipe) { }

  ngOnInit(): void {
    var result: any = [];

    INPUT.forEach(val => {
      var input = val;
      var output = this.hasValue(input);
      if (input == null || input === undefined) {
        input = input + "";
      } else if (typeof(input) === 'string') {
        input = '"' + input + '"'
      } else if (input.constructor.name === 'Object' || input.constructor.name === 'Array') { 
        input = JSON.stringify(input);
      } 
      result.push({input: input, output: output, color: output ? 'lightgreen' : '#f70d1a'})
    })

    this.data = result;    
  }

  hasValue(val: any): boolean {
    return this.pipe.transform(val);
  }
}
