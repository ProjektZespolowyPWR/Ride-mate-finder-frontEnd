import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Token } from './token';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MyHttpClientService {

  token: string = "";


  constructor(private http: HttpClient, private router: Router) {
    this.token = localStorage.getItem('token') || "";
  }

  get(url: string): any {
    return this.http.get("http://localhost:7777"+url);
  }

  getPrivate(url: string): any {
    return this.http.get("http://localhost:7777"+url, 
      {headers: new HttpHeaders({"Authorization": "Bearer "+this.token})}
    );
  }

  getDriver(url: string): any {
    return this.http.get("http://localhost:7777"+url,
      {headers: new HttpHeaders({"Authorization": "Bearer "+ this.token})}
    );
  }

  getToken(code: string): Observable<boolean> {
    return this.http.get<Token>("http://localhost:7777/auth/callback?code="+ code,
    {observe: "response"})
      .pipe(map((response: HttpResponse<Token>) => {
        if (response.status == 200 && response.body !== null) {
          this.token = response.body.token;
          localStorage.setItem('token', this.token);
          return true;
        } else {
          localStorage.removeItem('token');
          return false;
        }
      }));
  }

  postDriver(driverData: {name: string, description: string}): Observable<any> {
    return this.http.post("http://localhost:7777/driver/add", driverData,
      {headers: new HttpHeaders({"Authorization": "Bearer "+ this.token})}
    );
  }

  logout(): void {
    localStorage.removeItem('token');
    this.token = "";
    this.router.navigate(['/']);
  }



}
