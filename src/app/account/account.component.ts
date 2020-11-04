import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../account';

const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
})

@Component({
  selector: 'account-detail',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: Account;

  modifier: string = "";

  acctNum(): string {
    let num: string = this.account.num.toString();
    while (num.length < 4) num = "0" + num;
    return num;
  }

  acctBal(): string {
    return formatter.format(this.account.balance);
  }

  acctChangeNum(): string {
    return formatter.format(Math.abs(this.account.change.numeric));
  }

  acctChangePercent(): string {
    return this.modifier + Math.abs(this.account.change.percent).toFixed(2) + '%';
  }

  balanceModifier(): void {
    if (this.account.change.percent > 0) {
      this.modifier = "+";
    } else if (this.account.change.percent < 0) {
      this.modifier = "-";
    }
  }


  constructor() { }

  ngOnInit(): void {
    this.balanceModifier();
  }

}
