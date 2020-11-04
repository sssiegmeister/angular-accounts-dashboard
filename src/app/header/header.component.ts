import { Component, OnInit, Input } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { HeaderService } from '../header.service';
import { LoadService } from '../load.service';

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
    if (this.isActive()) {
      this.headerService.changeOrder();
    } else {
      this.headerService.setSortBy(this.key);
      this.loadService.loadMin();
    }
    this.accountsService.updateAccounts();
  }

  isActive(): boolean {
    return this.headerService.sortBy === this.key;
  }

  sortIndicator(): string {
    return this.headerService.ascending ? '^' : 'v';
  }

  constructor(private headerService: HeaderService, private accountsService: AccountsService, private loadService: LoadService) { }

  ngOnInit(): void {
    this.isActive();
  }

}
