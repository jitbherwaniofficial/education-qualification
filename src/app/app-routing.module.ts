import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEducationComponent } from './add-education/add-education.component';
import { EducationComponent } from './education/education.component';

const routes: Routes = [
  {
    path:"",
    component:EducationComponent
  },
  {
    path:"add-education",
    component:AddEducationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
