import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { environment } from '../../environments/environment';



@Injectable()
export class ApiService {

  constructor(private injector: Injector, private http: HttpClient) {

  }

  sendRequest(url, type, body?): Observable<any> {
    return this.http[type](url, body);
  }
  getQuotes(){
    return this.http.get(environment.apiURL + 'main/quotes')
  }
}