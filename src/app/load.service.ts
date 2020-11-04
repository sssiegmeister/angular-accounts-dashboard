import { Injectable } from '@angular/core';
import { AccountsService } from './accounts.service';

@Injectable({
  providedIn: 'root'
})
export class LoadService {

  loaded: boolean = false;

  loadAll(): void {
    this.loaded = true;
  }

  loadMin(): void {
    this.loaded = false;
  }

  constructor() { }
}
