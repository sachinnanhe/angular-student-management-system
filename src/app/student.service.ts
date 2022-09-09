import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import Student from './Entity/Student';
import { identifierModuleUrl } from '@angular/compiler';
import { Observable } from 'rxjs';



const BASE_URL = "http://localhost:8088/student"

const getall ="http://localhost:8088/students"




@Injectable({
  providedIn: 'root'
})
export class StudentService {

  BASE_URL = "http://localhost:8088/student"
  delete_url = "http://localhost:8088/delete"
  get_url = "http://localhost:8088/student/"
  class_url = "http://localhost:8088/listofstudent/"
  update_url = "http://localhost:8088/update/"

  addStudent(student:{
    firstName:string;
      lastName:string;
      stuClass:Number;
      subject:string;
      dob:Date;
    }){
    return this.http.post(BASE_URL,student)
  }
 
  // updateStudent(student:{
  //   firstName: string;
  //   lastName: string;
  //   stuClass: Number;
  //   subject: string;
  //   dob: Date;
  // },id:number){
  //   return this.http.put(this.update_url+id,student)
  // }
 
 

   getById(id):Observable<any>{
     return this.http.get(this.get_url+id)

   }

   getStudentByClass(stuClass){
     return this.http.get(this.class_url+stuClass)
   }

  getAllStudent(){
    return this.http.get(getall)
  }


  deleteStudent(id){
    return this.http.delete(this.delete_url+'?id='+id)
  }


  updateStudent(student, id){
    return this.http.put(this.update_url+id,student)
  }

  constructor(public http: HttpClient) { }
}


