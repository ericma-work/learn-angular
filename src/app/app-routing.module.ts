import { NgTemplateOutlet } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContentProjectionComponent } from './content-projection/content-projection.component';
import { DataFormComponent } from './data-form/data-form.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PipesDemoComponent } from './pipes-demo/pipes-demo.component';
import { NgTemplateOutletComponent } from './ng-template-outlet/ng-template-outlet.component';
import { CalendarMainComponent } from './calendar/calendar-main/calendar-main.component';
import { ShareDataComponent } from './share-data/share-data.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { TodoListComponent } from './todo-list/todo-list.component';

const routes: Routes = [
  { path: '', title: "Main Page", component: MainComponent},
  { path: 'create-edit', title: "Create-Edit", component: DataFormComponent },
  { path: 'pipe-demo', title: "Angular Pipe Demo", component: PipesDemoComponent},
  { path: 'content-projection', title: "Content Projection Demo", component: ContentProjectionComponent},
  { path: 'ng-template-outlet', title: "ngTemplate Outlet Demo", component: NgTemplateOutletComponent },
  { path: 'calendar', title: 'Calendar Home', component: CalendarMainComponent},
  { path: 'share-data-demo', title: 'Data Sharing Demo', component: ShareDataComponent},
  { path: 'calculator', title: 'Calculator', component: CalculatorComponent},
  { path: 'todo-list', title: 'Calculator', component: TodoListComponent},
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
