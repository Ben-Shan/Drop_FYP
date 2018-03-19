import {Component, ElementRef, ViewChild} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';




@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css']
})
export class CenterComponentComponent {
  url = '';
  @ViewChild('avatar') avatar: ElementRef;
  constructor(private httpClient: HttpClient) { }
  selectedFile: File = null;
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
    console.log(this.selectedFile);
  }
// https://178.62.39.172:3030/images
//   postImg (url: string, data: object) {
//     return this.httpClient.post('http://178.62.39.172:3030/images',
//       {
//         'message': 'Handling POST requests to /images',
//         'createdImage': {
//           'name': 'appl',
//           'size': '1200',
//           'imageFile': this.selectedFile
//         }
//       }).subscribe(
//       (response) => {
//         console.log(response);
//       },
//       (error) => {
//         console.log(error);
//       });
//   }
//   onUpload() {
//     const fd: FormData = new FormData();
//     fd.append('imageFile', this.selectedFile, this.selectedFile.name);
//     this.httpClient.post('http://178.62.39.172:3030/images',
//       {
//         'message': 'Handling POST requests to /images',
//         'createdImage': {
//           'name': 'appl',
//           'size': '1200',
//           'imageFile': fd
//         }
//       })
//       .subscribe(
//         (response) => {
//           console.log(response);
//           console.log(fd);
//         },
//         (error) => {
//           console.log(error, fd);
//         });
//     console.log(this.selectedFile);
//   }
//   postman_upload() {
//     const data: FormData = new FormData();
//     data.append('name', 'name');
//     data.append('size', 'size');
//     data.append('imageFile', this.selectedFile);
//     console.log(data);
//     const xhr = new XMLHttpRequest();
//     xhr.withCredentials = true;
//     xhr.addEventListener('readystatechange', function () {
//       if (this.readyState === 4) {
//         console.log(this.responseText);
//       }
//     });
//     xhr.open('POST', 'http://178.62.39.172:3030/images');
//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
//     xhr.setRequestHeader('Cache-Control', 'no-cache');
//     xhr.setRequestHeader('Postman-Token', '2c6ea9a6-8de9-4d8a-bce8-c6454616e9b1');
//     xhr.send(data);
//     console.log(data);
//   }

  onSubmit() {
    const formData = new FormData();
    formData.append('name', 'name');
    formData.append('size', 'size');
    formData.append('imageFile',
      this.avatar.nativeElement.files[0],
      this.avatar.nativeElement.files[0].name);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.httpClient.post('http://178.62.39.172:3030/images', formData, {headers: headers})
      .subscribe(
        (response) => {
          console.log(response);
        },
        (error) => {
        }
      );
  }


}

