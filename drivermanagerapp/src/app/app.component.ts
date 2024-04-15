import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Driver } from './driver';
import { DriverService } from './driver.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit{
  title(title: any) {
    throw new Error('Method not implemented.');
  }
  drivers: Driver[] = [];

  constructor(private driverServie: DriverService){}

  ngOnInit(): void {
    this.getDrivers();
  }

  getDrivers(): void{
    this.driverServie.getDrivers().subscribe(
      (response: Driver[]) => {
        this.drivers = response;
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }
    );
  }

}
