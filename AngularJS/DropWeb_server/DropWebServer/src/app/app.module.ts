import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { CenterComponentComponent } from './center-component/center-component.component';
import { PostsComponent } from './posts/posts.component';
import {HttpModule} from '@angular/http';
import {FormsModule} from '@angular/forms';
import { PostsService } from './posts.service';
import { BackgroundComponentComponent } from './background-component/background-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';

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
    CenterComponentComponent,
    PostsComponent,
    BackgroundComponentComponent,
    HeaderComponentComponent // Posts Component injected here
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES),
    NgxQRCodeModule
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
