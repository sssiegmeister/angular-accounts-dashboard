import { Component, OnInit } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoadService } from '../load.service';

@Component({
  selector: 'load-button',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {

  onClick(): void {
    this.loadService.loadAll();
    this.accountsService.updateAccounts();
  }

  constructor(private loadService: LoadService, private accountsService: AccountsService) { }

  ngOnInit(): void {
    
  }

}
