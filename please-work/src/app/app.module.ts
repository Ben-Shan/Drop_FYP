import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';

import { AppComponent } from './app.component';
import { PostsComponent } from './posts/posts.component';
import { PostsService } from './posts.service';
import { BackgroundComponentComponent } from './background-component/background-component.component';
import { CenterComponentComponent } from './center-component/center-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

// Define the routes
const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    component: PostsComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    PostsComponent,
    BackgroundComponentComponent,
    CenterComponentComponent,
    HeaderComponentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
	NgxQRCodeModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService], // Add the posts service
  bootstrap: [AppComponent]
})
export class AppModule { }