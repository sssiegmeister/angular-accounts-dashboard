import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  sortBy = "num";

  ascending = true;

  setSortBy(key: string): void {
    this.sortBy = key;
  }

  getSortBy(): Observable<string> {
    return of(this.sortBy);
  }

  changeOrder(): void {
    this.ascending = !this.ascending;
  }

  getAscending(): Observable<boolean> {
    return of(this.ascending);
  }

  constructor() { }
}
