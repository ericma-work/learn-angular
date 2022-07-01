import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import {MatButtonModule} from '@angular/material/button';
import { AppComponent } from './app.component';
import { DataFormComponent } from './data-form/data-form.component';
import { AppRoutingModule } from './app-routing.module';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { ItemsService } from './items.service';
import { HasValuePipe } from './pipes/hasvalue.pipe';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { ContentProjectionChidComponent } from './content-projection-chid/content-projection-chid.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { CalendarMainComponent } from './calendar/calendar-main/calendar-main.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ShareDataComponent } from './share-data/share-data.component';
import { ShareDataChildComponent } from './share-data-child/share-data-child.component';
import { ShareDataChild2Component } from './share-data-child2/share-data-child2.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { CalcDisplayComponent } from './calc-display/calc-display.component';
import { CalcButtonComponent } from './calc-button/calc-button.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { CalculatorServiceService } from './calculator-service.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListChildComponent } from './todo-list-child/todo-list-child.component';
import {MatCardModule} from '@angular/material/card';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    MainComponent,
    PageNotFoundComponent,
    HasValuePipe,
    PipesDemoComponent,
    ContentProjectionComponent,
    ContentProjectionChidComponent,
    NgTemplateOutletComponent,
    CalendarMainComponent,
    ShareDataComponent,
    ShareDataChildComponent,
    ShareDataChild2Component,
    CalculatorComponent,
    CalcDisplayComponent,
    CalcButtonComponent,
    TodoListComponent,
    TodoListChildComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatToolbarModule,
    MatTableModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    AppRoutingModule,
    MatDatepickerModule,    
    MatGridListModule,
    MatCardModule,
    MatDividerModule,
    MatDialogModule
  ],
  providers: [
    ItemsService,
    CalculatorServiceService,
    HasValuePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
