import { Component, OnInit } from '@angular/core';

import { Account } from '../account';
import { AccountsService } from '../accounts.service';
import { LoadService } from '../load.service';


@Component({
  selector: 'accounts-list',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: Account[];

  getAccounts(): void {
    this.accounts = this.accountsService.getAccounts();
  }

  constructor(private accountsService: AccountsService, public loadService: LoadService) { }

  ngOnInit(): void {
    this.getAccounts();
  }

}
