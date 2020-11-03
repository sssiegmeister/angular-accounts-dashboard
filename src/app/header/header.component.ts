import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { HeaderService } from '../header.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() direction: string;

  @Input() label: string;

  @Input() key: string;

  onSelect(): void {
    this.accountsService.updateAccounts();
    if (this.headerService.sortBy === this.key) {
      this.headerService.changeOrder();
    } else {
      this.headerService.setSortBy(this.key);
    }
  }

  isActive(): boolean {
    console.log(this.headerService.sortBy, this.key);
    return this.headerService.sortBy === this.key;
  }

  sortIndicator(): string {
    return this.headerService.ascending ? '^' : 'v';
  }

  // compare(a: Account, b: Account) {
  //   // console.log(this.sortBy, this.ascending);
  //   a = a[this.sortBy];
  //   b = b[this.sortBy];
  //   const base = this.ascending ? 1 : -1;
  //   if (a > b)
  //     return 1 * base;
  //   if (b > a)
  //     return -1 * base;
  //   else
  //     return 0;
  // }

  constructor(private headerService: HeaderService, private accountsService: AccountsService) { }

  ngOnInit(): void {
  }

}
