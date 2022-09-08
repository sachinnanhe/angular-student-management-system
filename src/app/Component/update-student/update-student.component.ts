import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  student: Student = new Student();

  students: Student[] = [];

  update(student){
    const observable= this.studentService.updateStudent(this.student)
    observable.subscribe(
      (response:any)=> {
         console.log(response);
      },)
    
   }


  constructor(public studentService : StudentService) { }

  ngOnInit(): void {
  }

}
