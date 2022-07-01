import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-template-outlet',
  // templateUrl: './ng-template-outlet.component.html',
  template: `
    <ng-container *ngTemplateOutlet="greet"></ng-container>
    <hr>
    <ng-container *ngTemplateOutlet="eng; context: myContext"></ng-container>
    <hr>
    <ng-container *ngTemplateOutlet="svk; context: myContext"></ng-container>
    <hr>

    <ng-template #greet><span>Hello</span></ng-template>
    <ng-template #eng let-test><span>Hello {{test}}!</span></ng-template>
    <ng-template #svk let-person="localSk"><span>Ahoj {{person}}!</span></ng-template>



    
    <ng-template #template1 let-name let-value>  
      <p>{{ name }}</p>
      <p>{{value}}</p>
    </ng-template>
    <ng-container *ngTemplateOutlet="template1; context: {$implicit: 'Bob', value:'1000'}">
    </ng-container> 
 
  `,
  styleUrls: ['./ng-template-outlet.component.css']
})
export class NgTemplateOutletComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  myContext = {$implicit: 'World', localSk: 'Svet'};

}
