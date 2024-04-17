import { Component, OnInit } from '@angular/core';
import { DriversService } from '../services/drivers.service';
import { Driver } from '../../types';
import { HttpErrorResponse } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{

  public drivers: Driver[] = [];
  constructor (
    private driversServices: DriversService
  ) {}

  ngOnInit() {
    this.driversServices.getDrivers('http://localhost:7777/driver').subscribe((response: Driver[]) => {
      this.drivers = response;
    },
    (error: HttpErrorResponse) => {
      alert(error.message);
    }
  );
  }

}
