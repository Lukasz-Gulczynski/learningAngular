import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PersonFormComponent } from './person-form/person-form.component';
import { PersonEditFormComponent } from './person-edit-form/person-edit-form.component';

const routes: Routes = [
  {
    path: 'add',
    component: PersonFormComponent
  },
  {
    path: 'edit/:id',
    component: PersonEditFormComponent
  }
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

