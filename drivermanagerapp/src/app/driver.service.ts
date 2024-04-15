import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Driver } from './driver';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DriverService {

  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }


  public getDrivers(): Observable<Driver[]> {
    return this.http.get<Driver[]>(`${this.apiServerUrl}/driver/all`);
  }


}

