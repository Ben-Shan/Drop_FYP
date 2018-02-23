import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { HeaderComponentComponent } from './header-component/header-component.component';
import { CenterComponentComponent } from './center-component/center-component.component';
import { BackgroundComponentComponent } from './background-component/background-component.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CenterComponentComponent,
    BackgroundComponentComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
