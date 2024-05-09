import { Component } from '@angular/core';
import { MyHttpClientService } from '../my-http-client.service';
import { Message } from '../message';
import { Driver, User } from '../../types';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { UserFormComponent } from '../user-form/user-form.component';
import { DriverFormComponent } from '../driver-form/driver-form.component';

@Component({
  selector: 'app-private-content',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive, UserFormComponent, DriverFormComponent],
  templateUrl: './private-content.component.html',
  styleUrl: './private-content.component.scss'
})
export class PrivateContentComponent {
  content: string = "";
  drivers: Driver[] = [];
  userContent: string = "";
  user: User | null = null;
  showForm = false;

  constructor(private http: MyHttpClientService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {
    this.http.getPrivate("/private/messages").subscribe((data: Message) => {
      this.content = data.message;
      console.info(this.content);

    });

    this.http.getPrivate("/user/dominikss2002@gmail.com").subscribe((data: User) => {
      this.user = data;
      console.info(this.user);
    })

    this.http.getPrivate("/driver").subscribe((data: Driver[]) => {
      this.drivers = data;
    });
  }
}
