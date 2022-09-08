import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddStudentComponent } from './Component/add-student/add-student.component';
import { HeaderComponent } from './Component/header/header.component';
import { FormsModule } from '@angular/forms';
import { UpdateStudentComponent } from './Component/update-student/update-student.component';
import { GetStudentComponent } from './Component/get-student/get-student.component';
import { GetAllStudentComponent } from './Component/get-all-student/get-all-student.component';
import { GetByClassComponent } from './Component/get-by-class/get-by-class.component';


@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    HeaderComponent,
    UpdateStudentComponent,
    GetStudentComponent,
    GetAllStudentComponent,
    GetByClassComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
