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

@NgModule({
  declarations: [
    AppComponent,
    DataFormComponent,
    MainComponent,
    PageNotFoundComponent
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
    AppRoutingModule
    
  ],
  providers: [
    ItemsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
