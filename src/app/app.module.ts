import { ToastrModule } from 'ng6-toastr-notifications';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './signup/signup.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MentionModule } from 'angular-mentions';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { RouterTestingModule } from '@angular/router/testing';
import { BoldpipePipe } from './boldpipe.pipe';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Seetinggenderpipe } from './setGender.pipe';
import { EmployeeViewComponent } from './employee-view/employee-view.component';



@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    BoldpipePipe,
    Seetinggenderpipe,
    EmployeeViewComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,   // 1step 1 completed
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AngularMultiSelectModule,
    MentionModule,
    RouterTestingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
