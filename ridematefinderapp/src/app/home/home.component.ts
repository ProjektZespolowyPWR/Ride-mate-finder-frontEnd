import { Component } from '@angular/core';
import { DriversService } from '../services/drivers.service';
import { Driver } from '../../types';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  constructor (
    private driversServices: DriversService
  ) {}

  ngOnInit() {
    this.driversServices.getDrivers('http://localhost:7777/driver').subscribe((response: Driver[]) => {
      console.log(response);
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }

}
