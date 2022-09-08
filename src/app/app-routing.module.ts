import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './Component/add-student/add-student.component';
import { GetAllStudentComponent } from './Component/get-all-student/get-all-student.component';
import { GetByClassComponent } from './Component/get-by-class/get-by-class.component';
import { GetStudentComponent } from './Component/get-student/get-student.component';
import { UpdateStudentComponent } from './Component/update-student/update-student.component';

const routes: Routes = [{path:'addstudent',component:AddStudentComponent},
{path:'updatestudent/:id',component:UpdateStudentComponent},
{path:'getallstudent',component:GetAllStudentComponent},
{path:'id',component:GetStudentComponent},{path:'class', component:GetByClassComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
