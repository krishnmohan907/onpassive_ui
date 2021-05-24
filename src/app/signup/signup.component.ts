import { ToastrManager } from 'ng6-toastr-notifications';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ExamsectionService } from '../examsection.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstname: any;
  userprofilename: FormGroup;
  constructor(private fb: FormBuilder, private toster: ToastrManager, private router: Router,
              private exam: ExamsectionService) { }
  ngOnInit(): void {
    this.userprofilename = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  addfoam() {
    console.log('sign up data', this.userprofilename.value);
    const obj = {
       email: this.userprofilename.value.email,
      password: this.userprofilename.value.password,
    };
    this.exam.postuserdata(obj).subscribe(response => {
      console.log('the response value list', response);
      if (response['message'] === 'success') {
        this.toster.successToastr('signup sucess');
      }
      else {
        this.toster.errorToastr('sign up is failed');
      }
    });
  }
  loginfoam() {
    this.router.navigateByUrl('/login');
  }
}
