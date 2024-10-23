import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { throwError } from 'rxjs/internal/observable/throwError';
import { catchError } from 'rxjs/internal/operators/catchError';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  readonly apiUrl = 'https://localhost:7187/';  

  constructor(private http: HttpClient) { }  

  getEmployees( id:number): Observable<any[]>  {
    // debugger;
    return this.http.get<any[]>(this.apiUrl + 'api/Employ/Get')
    .pipe(
      catchError(this.errorHandler)
    )  
  }

  errorHandler(error:any) {

    let errorMessage = '';
  
    if(error.error instanceof ErrorEvent) {
  
      errorMessage = error.error.message;
  
    } else {
  
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  
    }
  
    return throwError(errorMessage);
  
  }

}
