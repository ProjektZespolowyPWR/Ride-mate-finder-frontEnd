import { Component } from '@angular/core';
import { ActivatedRoute, RouterOutlet, Router } from '@angular/router';
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
import { DriverFormComponent } from './driver-form/driver-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent, LoginFormComponent, PrivateContentComponent, PublicContentComponent, HttpClientModule, RouterModule, DriverFormComponent, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ridematefinderapp';
  componentToShow: string = "public";
  showProfileVar: string = "false";
  isLogged: boolean = false;

  constructor(private http: MyHttpClientService, private route: ActivatedRoute, private router: Router) {}

    ngOnInit(): void {
      console.log("ng init");
      this.componentToShow = this.http.token ? "private" : "public";
      this.route.queryParams.subscribe(params => {
        if(params["code"] !== undefined) {
          this.http.getToken(params["code"]).subscribe(result => {
            if(result == true) {
              this.isLogged = true;
              this.componentToShow = "private";
              this.router.navigate(['/']);
            } else {
              // this.componentToShow = "public";
              this.componentToShow = this.http.token ? "private" : "public";
            }
          });
        }
      });
    }

    logout(): void {
      this.http.logout();
      console.log("test logout");
      this.isLogged = false;
      this.ngOnInit();
    }

    showProfile(): void {
      this.showProfileVar = "profile";
      this.ngOnInit();
    }
  }



