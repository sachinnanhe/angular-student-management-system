import { Component, OnInit } from '@angular/core';
import { stringify } from 'querystring';
import Student from 'src/app/Entity/Student';
import { StudentService } from 'src/app/student.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  studentToUpdate: Student = new Student();

  students: Student[] = [];
  id: number = 0;

  // studentToUpdate = {
  //   firstName:"",
  //   lastName:"",
  //   stuClass:"",
  //   subject:"",
  //   dob:""
  // }




  constructor(public studentService: StudentService, public rout: ActivatedRoute,
    public router: Router
    ) { }

  update(student: Student) {
    this.studentService.updateStudent(student, student.id).subscribe((result) => {
      console.log(result);
      // this.router.navigate['getallstudent']
    },
      (error) => {
        console.log(error)
      }
    )

  }
  ngOnInit(): void {
    this.getData();
  }
  getData() {
    this.id = this.rout.snapshot.params['id'];
    this.studentService.getById(this.id).subscribe((response) => {
      this.studentToUpdate = response;
    }
    )
  }

}
