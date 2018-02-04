import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable()
export class MovieService {

  constructor(private _http: HttpClient) { }

  getNowPlayingMovies() {
    const params = new HttpParams();
    return this._http.get(`movie/now_playing`)
      .map((response: any) =>
        response.results
      );
  }

}
