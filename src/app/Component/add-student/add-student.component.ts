import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  student: Student = new Student();

  students: Student[] = [];


  save(){
    const observable= this.studentService.addStudent(this.student)
    observable.subscribe(
      (response:any)=> {
         console.log(response);
      },)
    
   }

  constructor(public studentService : StudentService) { }

  ngOnInit(): void {
  }

}
