import { Component, OnInit } from '@angular/core';
import { AccountsServiceService } from '../accounts-service.service';

@Component({
  selector: 'app-accounts-http',
  templateUrl: './accounts-http.component.html',
  styleUrls: ['./accounts-http.component.css']
})
export class AccountsHttpComponent implements OnInit {
  accounts = [];
  errorMsg;

  private __accountsServiceService: AccountsServiceService;
  constructor(__accountsServiceService:AccountsServiceService) {
    this.__accountsServiceService = __accountsServiceService;
   }
  ngOnInit(): void {
    this.__accountsServiceService.getAllAccountsFromServer()
      .subscribe(data=>this.accounts = data,
                 error=>{
                   return this.errorMsg = error;
                 });
      console.log(" ----->>> Http Component -> "+this.accounts.length);
  }

}
