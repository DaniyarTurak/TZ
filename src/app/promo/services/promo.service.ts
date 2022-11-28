import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { filter, map, Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class PromoService {
  private apiUrl = 'https://type.fit/api/quotes';

  constructor(private http: HttpClient) {}

  getQuotes(): Observable<any> {
    return this.http.get(this.apiUrl);
  }
}
