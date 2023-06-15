import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  apiUrl : string;

  constructor(private http: HttpClient) {

    this.apiUrl = "https://api.appscalex.com/Prod/records";

   }

  create(data: any): Observable<any> {
    return this.http.post(this.apiUrl, data);
  }

}
