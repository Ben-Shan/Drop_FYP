import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

import { HeaderComponentComponent } from './header-component/header-component.component';
import { CenterComponentComponent } from './center-component/center-component.component';
import { BackgroundComponentComponent } from './background-component/background-component.component';
import { PostsComponent } from './posts/posts.component';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import { RouterModule } from '@angular/router';
import { PostsService } from './posts.service';

const ROUTES = [
  {
    path: '',
    redirectTo: 'posts',
    pathMatch: 'full'
  },
  {
    path: 'posts',
    components: PostsComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponentComponent,
    CenterComponentComponent,
    BackgroundComponentComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    HttpClientModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [PostsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
