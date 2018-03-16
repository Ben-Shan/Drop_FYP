import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import axios from 'axios';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';

@Injectable()
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }


  postImg (url: string, data: object) {
    return this.httpClient.post('https://178.62.39.172:3030/images', {name: 'qwew', size: 'test'}).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }


}
