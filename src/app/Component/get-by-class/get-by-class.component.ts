import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';

@Component({
  selector: 'app-get-by-class',
  templateUrl: './get-by-class.component.html',
  styleUrls: ['./get-by-class.component.css']
})
export class GetByClassComponent implements OnInit {

  student: Student = new Student();

  students: Student[] = [];

  getByClass(student){
      this.studentService.getStudentByClass(student.stuClass).subscribe(
        (response)=>{
          console.log(response)
        },
        (error)=>
        console.log(error)
      );
  }

  constructor(public studentService : StudentService) { }

  ngOnInit(): void {
  }

}
