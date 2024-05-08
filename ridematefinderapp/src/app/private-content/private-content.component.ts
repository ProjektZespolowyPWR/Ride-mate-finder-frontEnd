import { Component } from '@angular/core';
import { MyHttpClientService } from '../my-http-client.service';
import { Message } from '../message';
import { Driver, User } from '../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-private-content',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './private-content.component.html',
  styleUrl: './private-content.component.scss'
})
export class PrivateContentComponent {
  content: string = "";
  drivers: Driver[] = [];
  userContent: string = "";
  user: User | null = null;

  constructor(private http: MyHttpClientService) {}

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
