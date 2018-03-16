import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { FileUploadService } from '../file-upload.service';


@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css']
})
export class CenterComponentComponent {
  url = '';

  constructor(private httpClient: HttpClient) { }
  selectedFile = null;
  onFileSelected(event) {
    this.selectedFile = event.target.files[0];
    console.log(event);
    console.log(this.selectedFile);
  }
// https://178.62.39.172:3030/images
  postImg (url: string, data: object) {
    return this.httpClient.post('http://178.62.39.172:3030/images',
      {
        'message': 'Handling POST requests to /images',
        'createdImage': {
          'name': 'appl',
          'size': '1200',
          'imageFile': this.selectedFile
        }
      }).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      });
  }

}

