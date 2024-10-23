import { Component, OnInit } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { EmployeeModule } from '../employee/employee.module';
import { EmployeeService } from '../employee.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-employee-search',
  standalone: true,   //
  imports: [],     //
  templateUrl: './employee-search.component.html',
  styleUrl: './employee-search.component.css'
})
export class EmployeeSearchComponent implements OnInit  {
  
  lstEmployees : any[] = [];
  idEmployee:number=1;
  myForm: FormGroup;

  constructor( private serviceEmploy: EmployeeService) { 

    this.myForm = new FormGroup({
      idEmployee: new FormControl(this.idEmployee),
      
    });  
  }
  ngOnInit() {
    // debbu
      
 }

 public getEmployees() {   
  
  this.serviceEmploy.getEmployees(this.idEmployee).subscribe((data: any[])=>{
   this.lstEmployees = data;
   console.log(this.lstEmployees);     
      
   }); 
   }

}

export interface Employ {  
  id: number  
  name: string
  salary: number  
  age: number  
  profileImage : string
  annualSalary?: number    
}