import { Injectable, Injector } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';



@Injectable()
export class RemoteCallService {

    constructor(private injector: Injector, private http: HttpClient) { 

    }

    sendRequest(url, type, body?): Observable<any> {
        return this.http[type](url, body);
    }
}