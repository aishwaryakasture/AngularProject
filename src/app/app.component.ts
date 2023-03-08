import { Component } from '@angular/core';
import { StudentService } from './student.service';
import { NgForm } from '@angular/forms';
import { __values } from 'tslib';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: Object;
  title = 'StudentDashboard';


  studentDetails:any;
  StudentToUpdate ={
    rollNumber:"",
    name:"",
    adders:"",
    percentage:""
  };
  constructor(private studentService:StudentService){
    this.getStudentsDetails
   }
register(registerform:NgForm) {
      this.studentService.registerStudent(registerform.value).subscribe(
        (reps)=>{
          console.log(reps);
          registerform.reset();
          this.getStudentsDetails();
        },
        (err) =>{
          console.log(err);
        }
        );
}
getStudentsDetails(){
  this.studentService.getStudents().subscribe(
    (resp)=>{
      console.log(resp);
      this.studentDetails = resp;
    },
    (err)=>{
      console.log(err);
    }
  );
}

deleteStudent(student: { rollNumber: any }){
  this.studentService.deleteStudent(student.rollNumber).subscribe(
    (resp)=> {
      console.log(resp);
    },
    (err)=>{
      console.log(err);
    }
  );
}

edit(student:any){
this.StudentToUpdate = student;

}

updateStudent(){
  this.studentService.updateStudent(this.StudentToUpdate).subscribe(
    (resp)=>{
      console.log(resp);
    },
    (err)=>{
    console.log(err);
    }
  );
}

}
