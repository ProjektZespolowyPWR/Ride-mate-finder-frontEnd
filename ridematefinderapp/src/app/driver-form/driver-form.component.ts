import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MyHttpClientService } from '../my-http-client.service';

@Component({
  selector: 'app-driver-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './driver-form.component.html',
  styleUrl: './driver-form.component.scss'
})
export class DriverFormComponent {

  profileForm = new FormGroup({
    name: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(private http: MyHttpClientService) {}

  submitDriver() {
    console.log("name : "+ this.profileForm.controls["name"].value);
    const dirverName = this.profileForm.get('name')?.value;
    const driverDescription = this.profileForm.get('description')?.value;
    if (dirverName && driverDescription) {
      this.http.postDriver({name: dirverName, description: driverDescription}).subscribe({
        next: (response) => {
          console.log('Driver add successfully: ', response);
          this.profileForm.reset();
        },
        error: (error) => {
          console.error('Error adding driver: ', error);
        }
      });
    } else {
      console.warn('Name and description are required to add a driver');
    }
  }

}
