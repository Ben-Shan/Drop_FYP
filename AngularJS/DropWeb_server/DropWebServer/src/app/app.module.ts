import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';


import { AppComponent } from './app.component';
import { CenterComponentComponent } from './center-component/center-component.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BackgroundComponentComponent } from './background-component/background-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';



// const ROUTES = [
//   {
//     path: '',
//     redirectTo: 'posts',
//     pathMatch: 'full'
//   },
//   {
//     path: 'posts',
//     component: PostsComponent
//   }
// ];

@NgModule({
  declarations: [
    AppComponent,
    CenterComponentComponent,
    // PostsComponent,
    BackgroundComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
   // RouterModule.forRoot(ROUTES),
    NgxQRCodeModule
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
