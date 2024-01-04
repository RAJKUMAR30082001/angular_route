import { Component } from '@angular/core';
import { StudentService } from '../student-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentInterface } from '../student-interface';

@Component({
  selector: 'app-student-add',
  templateUrl: './student-add.component.html',
  styleUrls: ['./student-add.component.scss']
})
export class StudentAddComponent {
  constructor(private service:StudentService){}
  public student_list= new FormGroup({
    StudentName:new FormControl('',[Validators.required]),
    department:new FormControl('',[Validators.required]),
    grade:new FormControl('',[Validators.required])
  })

  submit(){
    if (this.student_list.valid) {
      let StudentName=this.service.checkValid(this.student_list.get('StudentName')?.value ?? '')
      let department=this.service.checkValid(this.student_list.get('department')?.value ?? '')
      let grade=this.service.registerCheck(this.student_list.get('grade')?.value ?? '')
      let filter:StudentInterface[]=this.service.getDetails().filter(item=> item.grade===grade)
      if(filter.length===0){
      if(StudentName&& department && grade){

      let studetails:StudentInterface={
       StudentName:StudentName,
       department:department,
       grade:grade
      }
      this.service.addStudent(studetails)
      this.student_list.reset()

    }
  
    else {
      alert("give the correct details")
      this.student_list.reset()
    }
    }
    else {
      alert('register already exist')
      this.student_list.reset()
    }
  }
  }
}
