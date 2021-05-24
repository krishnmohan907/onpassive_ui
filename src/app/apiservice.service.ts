import { Injectable } from '@angular/core';
import { environment } from './../environments/enviroment';


@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  public static API = {
    SIGNUP: environment.apiUrl + '/signup',
    POST_LOGIN: environment.apiUrl + '/login',
    POST_REACTIVE_FOAMS: environment.apiUrl + '/postquestion',
    GET_USER_DATA: environment.apiUrl + '/getuserdata',
    Employee_Data: environment.apiUrl + '/insertemployee',
    Edit_Employee_Data: environment.apiUrl + '/updateemployee',
    Delete_employee_list: environment.apiUrl + '/deleteuser'
  };
}
