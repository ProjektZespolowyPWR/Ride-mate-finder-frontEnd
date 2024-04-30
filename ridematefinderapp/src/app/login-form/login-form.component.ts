import { Component } from '@angular/core';
import { MyHttpClientService } from '../my-http-client.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent {
  url: string = "";

  constructor(private http: MyHttpClientService) {}

  ngOnInit(): void {
    this.http.get("/auth/url").subscribe((data: any) => {
      this.url = data.url;
    });
  }

}
