import { Injectable } from '@angular/core';

import { ACCOUNTS } from './mock-accounts';
import { HeaderService } from './header.service';
import { Account } from './account';
import { LoadService } from './load.service';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  accounts: Account[] = ACCOUNTS;

  compare(a: Account, b: Account) {
    a = a[this.headerService.sortBy];
    b = b[this.headerService.sortBy];
    const base = this.headerService.ascending ? 1 : -1;
    if (a > b)
      return 1 * base;
    if (b > a)
      return -1 * base;
    else
      return 0;
  }

  constructor(private headerService: HeaderService, private loadService: LoadService) { }

  updateAccounts(): void {
    this.accounts = this.accounts.sort(this.compare.bind(this));
  }

  getAccounts(): Account[] {

    this.updateAccounts();

    return this.accounts;
  }
}
