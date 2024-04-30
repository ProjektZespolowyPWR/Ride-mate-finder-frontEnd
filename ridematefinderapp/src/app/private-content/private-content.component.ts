import { Component } from '@angular/core';
import { MyHttpClientService } from '../my-http-client.service';
import { Message } from '../message';
import { Driver } from '../../types';
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

  constructor(private http: MyHttpClientService) {}

  ngOnInit(): void {
    this.http.getPrivate("/private/messages").subscribe((data: Message) => {
      this.content = data.message;

    });

    this.http.getPrivate("/driver").subscribe((data: Driver[]) => {
      this.drivers = data;
    });
  }
}
