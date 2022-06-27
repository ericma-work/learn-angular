import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataFormComponent } from './data-form/data-form.component';
import { MainComponent } from './main/main.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  { path: '', title: "Main Page", component: MainComponent},
  { path: 'create-edit', title: "Create-Edit", component: DataFormComponent },
  { path: '**', title: 'Page Not Found', component: PageNotFoundComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
