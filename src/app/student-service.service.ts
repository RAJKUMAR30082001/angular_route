import { Injectable } from '@angular/core';
import { StudentInterface } from './student-interface';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  public studentDetail:StudentInterface[]=[]
  constructor() { }
  addStudent(std:StudentInterface){
    this.studentDetail.push(std)
    console.log(this.studentDetail)
  }

  checkValid(element:string):string|boolean|any{
    if(isNaN(parseInt(element))) return element.toLowerCase()
    else {
      return false
    }
  }
  getDetails():StudentInterface[]{
    return this.studentDetail;
  }
  registerCheck(element:string):string|boolean|any{
    if(element.length>5) return false
    else return element.toLowerCase()
  }

}
