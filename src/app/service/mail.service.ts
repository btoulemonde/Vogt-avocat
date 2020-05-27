import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {User} from '../domains/User';
import { Observable, throwError  } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
const url = environment.baseUrl;
const httpOptions = {
  headers: new HttpHeaders({'Access-Control-Allow-Origin': '*', 'Content-Type': 'application/json'})

};

@Injectable({
  providedIn: 'root'
})
export class MailService {

  constructor(private httpClient: HttpClient) { }

  sendEmail(user: User): Observable<void> {
    return this.httpClient.post<void>(`${url}sendemail`, user, httpOptions);
  }
}
