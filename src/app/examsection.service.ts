import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from './apiservice.service';

@Injectable({
  providedIn: 'root'
})
export class ExamsectionService {

  constructor(private http: HttpClient) { }

  postuserdata(data: any) {
    return this.http.post(ApiserviceService.API.SIGNUP, data)
  }

  login(obj: any) {
    console.log('the service login itemvalu', obj);
    return this.http.post(ApiserviceService.API.POST_LOGIN, obj);
  }

  postfoamcontroller(obj: any) {
    console.log('the foam array object', obj);
    return this.http.post(ApiserviceService.API.POST_REACTIVE_FOAMS, obj);
  }

  postEmployeedata(obj:any){
    return this.http.post(ApiserviceService.API.Employee_Data,obj)
  }

  posteditEmployeedata(obj:any){
    return this.http.post(ApiserviceService.API.Edit_Employee_Data,obj)
  }

  deleteEmployeedata(obj){
    return this.http.post(ApiserviceService.API.Delete_employee_list,obj)
  }


  getuserdata(){
    return this.http.get(ApiserviceService.API.GET_USER_DATA);
  }
}
