import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { DropzoneModule } from 'ngx-dropzone-wrapper';
import { DROPZONE_CONFIG } from 'ngx-dropzone-wrapper';
import { DropzoneConfigInterface } from 'ngx-dropzone-wrapper';

import { AppComponent } from './app.component';
import { CenterComponentComponent } from './center-component/center-component.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { BackgroundComponentComponent } from './background-component/background-component.component';
import { HeaderComponentComponent } from './header-component/header-component.component';




const DEFAULT_DROPZONE_CONFIG: DropzoneConfigInterface = {
  url: 'http://178.62.39.172:3030/images',
  acceptedFiles: 'image/*'
};

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
    NgxQRCodeModule,
    DropzoneModule
  ],
  providers: [HttpClientModule, {
    provide: DROPZONE_CONFIG,
    useValue: DEFAULT_DROPZONE_CONFIG
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
