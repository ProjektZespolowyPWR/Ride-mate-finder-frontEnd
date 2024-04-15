import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Driver, PaginationParams } from '../../types';

@Injectable({
  providedIn: 'root'
})
export class DriversService {

  constructor(private apiService: ApiService) { }

  getDrivers = (url: string): Observable<Driver[]> => {
    return this.apiService.get(url);
  }
}
