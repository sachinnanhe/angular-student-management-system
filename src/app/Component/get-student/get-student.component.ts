import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/student.service';
import { ActivatedRoute } from '@angular/router';
import Student from 'src/app/Entity/Student';

@Component({
  selector: 'app-get-student',
  templateUrl: './get-student.component.html',
  styleUrls: ['./get-student.component.css']
})
export class GetStudentComponent implements OnInit {

  student: Student = new Student();

  students: Student[] = [];

  getById(student){
      this.studentService.getById(student.id).subscribe(
        (response)=>{
          console.log(response)
        },
        (error)=>
        console.log(error)
      );
  }


  constructor(public studentService : StudentService, public router :ActivatedRoute) { }

  ngOnInit(): void {
   
  
  }
}
