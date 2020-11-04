import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  sortBy: string = "num";

  ascending: boolean = true;

  setSortBy(key: string): void {
    this.sortBy = key;
  }

  changeOrder(): void {
    this.ascending = !this.ascending;
  }

  constructor() { }
}
