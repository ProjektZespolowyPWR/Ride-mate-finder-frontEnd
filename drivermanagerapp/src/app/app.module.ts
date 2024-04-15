import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { DriverService } from "./driver.service";
import { HttpClientModule } from "@angular/common/http";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule
    ],
    providers: [DriverService],
    bootstrap: [AppComponent]
})

export class AppModule { }