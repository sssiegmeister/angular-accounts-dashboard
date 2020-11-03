import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'account-detail',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss']
})
export class AccountComponent implements OnInit {

  @Input() account: Account;

  constructor() { }

  ngOnInit(): void {
    console.log(this.account);
  }

}
