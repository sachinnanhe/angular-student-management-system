import { Component, OnInit } from '@angular/core';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';


@Component({
  selector: 'app-get-all-student',
  templateUrl: './get-all-student.component.html',
  styleUrls: ['./get-all-student.component.css']
})
export class GetAllStudentComponent implements OnInit {

  student: Student = new Student();

  students: Student[] = [];
  
   deleteStudent(student){
     this.studentService.deleteStudent(student.id).subscribe(
       (reponse)=> {
         console.log(reponse);
  
       },
       (error)=> console.log(error)
     );
   }


  constructor(public studentService : StudentService) { }

  ngOnInit(): void {
    const promise = this.studentService.getAllStudent();
    promise.subscribe((response)=>{
      console.log(response);
      this.students = response as Student[];
    })
     
  }

}
