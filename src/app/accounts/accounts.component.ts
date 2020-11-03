import { Component, OnInit } from '@angular/core';

import { Account } from '../account';
import { AccountsService } from '../accounts.service';
import { HeaderService } from '../header.service';


@Component({
  selector: 'accounts-list',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.scss']
})
export class AccountsComponent implements OnInit {
  accounts: Account[];

  sortBy: string;
  ascending: boolean;

  getSortDetails(): void {
    this.headerService.getSortBy()
        .subscribe(sortBy => this.sortBy = sortBy);
    this.headerService.getAscending()
        .subscribe(ascending => this.ascending = ascending)
  }

  getAccounts(): void {
    this.accountsService.getAccounts()
        .subscribe(accounts => this.accounts = accounts);
  }

  constructor(private headerService: HeaderService, private accountsService: AccountsService) { }

  ngOnInit(): void {
    this.getSortDetails();
    this.getAccounts();
  }

}
