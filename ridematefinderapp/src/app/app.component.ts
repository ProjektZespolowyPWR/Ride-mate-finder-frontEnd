import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './login-form/login-form.component';
import { PrivateContentComponent } from './private-content/private-content.component';
import {PublicContentComponent } from './public-content/public-content.component';
import { MyHttpClientService } from './my-http-client.service';
import {OnInit} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoginFormComponent, PrivateContentComponent, PublicContentComponent, HttpClientModule, RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ridematefinderapp';
  componentToShow: string = "public";

  constructor(private http: MyHttpClientService, private route: ActivatedRoute) {}

    ngOnInit(): void {
      this.route.queryParams.subscribe(params => {
        if(params["code"] !== undefined) {
          this.http.getToken(params["code"]).subscribe(result => {
            if(result == true) {
              this.componentToShow = "private";
            } else {
              this.componentToShow = "public";
            }
          });
        }
      });
    }
  }



