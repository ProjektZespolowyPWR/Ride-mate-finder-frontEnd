import { Component } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MyHttpClientService } from '../my-http-client.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

  profileForm = new FormGroup({
    name: new FormGroup(''),
    surname: new FormGroup(''),
    gender: new FormGroup(''),
    age: new FormGroup(''),
  });

  constructor(private http: MyHttpClientService) {}

  ngOnInit(): void {
    console.info("test");
  }

  submitUser() {
    
  }

}
