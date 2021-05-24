import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ExamsectionService } from './../examsection.service';
import { Component, OnInit } from '@angular/core';
import { ToastrManager } from 'ng6-toastr-notifications';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myForm: FormGroup;
  userdata: any = [];
  empdata: any = [];
  title = 'Product List Component';


  constructor(private exam: ExamsectionService,
              // tslint:disable-next-line:variable-name
              private _fb: FormBuilder, private toster: ToastrManager, private router: Router) { }

  ngOnInit(): void {
    this.getuserdata();
    this.myForm = this._fb.group({
      email: new FormControl({ value: '', disabled: false }),
      password: new FormControl({ value: '', disable: false })
    });
  }

  submitlogin() {
    console.log('thismy foam', this.myForm);
    const obj = {
      email: this.myForm.value.email,
      pswd: this.myForm.value.password
    };
    console.log('sdnfnaksnd', obj);
    this.exam.login(obj).subscribe(response => {
      console.log('responce object', response);
      if (response['statusCode'] = false) {
        this.toster.successToastr('sign up is failed');
      }
      if (response['success'] = true) {
        this.toster.successToastr('signup sucess');
        this.router.navigate(['./home']);
      }
      else {
        this.toster.errorToastr('sign up is failed');
      }
    });
  }

  getuserdata(){
    this.exam.getuserdata().subscribe(response => {
      console.log('responce data list', response);
      this.userdata = response;
      console.log('user data list', this.userdata.data);
      this.empdata = this.userdata.data;
    });
  }
}
