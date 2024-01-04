import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StudentAddComponent } from './student-add/student-add.component';
import { ListStudentComponent } from './list-student/list-student.component';
import { UpdateStudentComponent } from './update-student/update-student.component';

const routes: Routes = [
  
  {path:'student_add',component:StudentAddComponent},
  {path:'list_student',component:ListStudentComponent},
  {path:'home',component:HomeComponent},
  {path:'update_student',component:UpdateStudentComponent},
  {path:'',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
