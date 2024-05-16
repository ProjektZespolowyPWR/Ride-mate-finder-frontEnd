import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MyHttpClientService } from '../my-http-client.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.scss'
})
export class UserFormComponent {

  profileForm = new FormGroup({
    name: new FormControl('', [
      Validators.required,
    ]),
    surname: new FormControl('', [
      Validators.required,
    ]),
    gender: new FormControl('', [
      Validators.required,
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.min(18)
    ]),
  });

  formError: string | null = null;

  constructor(private http: MyHttpClientService) {}

  ngOnInit(): void {
    console.info("test");
  }

  submitUser() {

    this.formError = null;
    if(this.profileForm.valid){
      console.log(this.profileForm.value);
    } else {
      this.formError = 'Please correct the errors in the form before submitting';
      console.error('Form contains invalid data');
    }
    
    
  }

}
