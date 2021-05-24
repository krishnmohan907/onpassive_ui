import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ExamsectionService } from './../examsection.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  checkingngif = true
  test = false
  switchvalue = "three";
  fullname: any;
  jobtitle: any;
  Depertement: any;
  Location: any;
  age: any;
  salary: any;


  constructor(private exam: ExamsectionService,
    // tslint:disable-next-line:variable-name
    private toster: ToastrManager, private router: Router) { }

  ngOnInit(): void {
  }

  checkingngifcondition() {
    this.checkingngif = false;
  }

  // Post Employee data
  submitlogin(foam:any) {
    let obj = {
      Full_name: this.fullname,
      job_Title: this.jobtitle,
      Departement: this.Depertement,
      Location: this.Location,
      Age: Number(this.age),
      Salary: Number(this.salary)
    }
    console.log('data', obj)
    this.exam.postEmployeedata(obj).subscribe(data => {
      if (data['message'] === 'success') {
        foam.form.reset();
        this.router.navigate(['./employee']);
        this.toster.successToastr('Employee Registation sucess');
      }
      else {
        this.toster.errorToastr('Employee Registation is failed');
      }
    })
  }


}
