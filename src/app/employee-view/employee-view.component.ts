import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ExamsectionService } from '../examsection.service';

@Component({
  selector: 'app-employee-view',
  templateUrl: './employee-view.component.html',
  styleUrls: ['./employee-view.component.css']
})
export class EmployeeViewComponent implements OnInit {
  employeedata :any=[]
  finalemployeedata: any=[];
  editEmp_id: any;
  editfullname: any;
  editjobtitle: any;
  editdepertamanet: any;
  editlocation: any;
  editage: any;
  editsalary: any;

  constructor(private exam: ExamsectionService,
    // tslint:disable-next-line:variable-name
    private toster: ToastrManager, private router: Router) { }

  ngOnInit(): void {
    this.getEmployeedata();
  }


   //Get Employee Data
   getEmployeedata() {
    this.exam.getuserdata().subscribe(response => {
      console.log('employee data', response)
      this.employeedata=response
      this.finalemployeedata =this.employeedata.data
      console.log('employee data list',this.finalemployeedata);

    })
  }

  edit(val:any){
    console.log(val)
    this.editEmp_id = val.Emp_id
    this.editfullname=val.Full_name
    this.editjobtitle=val.job_Title
    this.editdepertamanet=val.Departement
    this.editlocation=val.Location
    this.editage=val.Age
    this.editsalary=val.Salary
  }

  // Post Employee data
  submitlogin(foam:any) {
    let obj = {
      Emp_id :this.editEmp_id,
      Full_name:  this.editfullname,
      job_Title: this.editjobtitle,
      Departement: this.editdepertamanet,
      Location: this.editlocation,
      Age: Number(this.editage),
      Salary: Number( this.editsalary)
    }
    console.log('data', obj)
    this.exam.posteditEmployeedata(obj).subscribe(data => {
      if (data['message'] === 'success') {
        this.getEmployeedata();
        this.toster.successToastr('Employee Update Registation sucess');
      }
      else {
        this.toster.errorToastr('Employee Registation is failed');
      }
    })
  }

  delete(val:any){
    let obj = {
      Emp_id :val.Emp_id,
    }
    console.log('delete user data',obj)
    this.exam.deleteEmployeedata(obj).subscribe(data => {
      if (data['message'] === 'success') {
        this.getEmployeedata();
        this.toster.successToastr('Delete Employee');
      }
      else {
        this.toster.errorToastr('Delete Employee Registation is failed');
      }
    })
  }
}
