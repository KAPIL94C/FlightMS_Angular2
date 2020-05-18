import { Injectable, ErrorHandler } from '@angular/core';
import { HttpClient,HttpErrorResponse } from '@angular/common/http';  //for http
import { throwError , Observable } from 'rxjs'  //for error
import { catchError } from 'rxjs/operators'    //for error

@Injectable({
  providedIn: 'root'
})
export class AccountsServiceService {
  [x: string]: any;

  private endpoint = "/assets/data/accounts-json.json";

  constructor(private http : HttpClient ) { }

  getAllAccountsFromServer():Observable<AccountsServiceService[]>
  { // this.http.get(endpoint);
    return this.http.get<AccountsServiceService[]>(this.endpoint)
    .pipe(catchError(this.exceptionHandler));
  }
  exceptionHandler(error:HttpErrorResponse)
  {
    return throwError(error.message || "Server Error!! Contact to Customer Care");
  
  }
}
