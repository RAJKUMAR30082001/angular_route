import { Component } from '@angular/core';
import { StudentService } from '../student-service.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { StudentInterface } from '../student-interface';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.scss']
})
export class ListStudentComponent {
  public filterdStudent:StudentInterface[]=[]
  constructor(private service:StudentService){}
  public getDetails= new FormGroup({
    searchBy:new FormControl('',[Validators.required]),
    searchInput:new FormControl('',[Validators.required])
  })  

 submit()
 {
  let type=this.getDetails.get('searchBy')?.value??''
  let fieldValue:string=''
  if(type==='grade'){
  fieldValue=this.service.registerCheck(this.getDetails.get('searchInput')?.value??'')
    this.filterdStudent=this.service.getDetails().filter(std=> std.grade===fieldValue)

  }
  else {
  fieldValue=this.service.checkValid(this.getDetails.get('searchInput')?.value??'')
    this.filterdStudent=this.service.getDetails().filter(std=> std.department===fieldValue)
    console.log(type)

  }
  if(this.filterdStudent.length===0){
    alert("No student found")
    this.getDetails.reset()
  }



 }

}
