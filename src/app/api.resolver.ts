import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ApiService } from './api/api.service';

@Injectable({
  providedIn: 'root'
})
export class QuotesResolver implements Resolve<any> {
  constructor(public apiService: ApiService) { }
  resolve() {
    return this.apiService.getQuotes();
  }
}
