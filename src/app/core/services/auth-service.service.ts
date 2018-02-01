import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { HttpParams } from '@angular/common/http';
const API_KEY = 'e0f30a792b0418f70585b0dc06e9ce16';

@Injectable()
export class AccountService {

  constructor(private _http: HttpClient) {

  }

  public getAccount(): Observable<any> {
    return this._http.get('account');
  }
}
