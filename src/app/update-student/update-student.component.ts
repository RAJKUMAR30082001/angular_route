import { Component } from '@angular/core';
import { StudentService } from '../student-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentInterface } from '../student-interface';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.scss']
})
export class UpdateStudentComponent {
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

      if(StudentName&& department&& grade){
        let student=this.service.getDetails()
        let filteredStudent:StudentInterface[]=this.service.getDetails().filter(item=> item.grade===grade)
        if(filteredStudent.length===1){
        filteredStudent.forEach(std => {
          std.StudentName = StudentName;
          std.department = department;
        });
        console.log(student)
        this.student_list.reset()
      }
      else{
        alert("enter correct register number")
        this.student_list.reset()
      }
      }

      else{
        alert("enter valid details")
        this.student_list.reset()
      }

}
}
}
