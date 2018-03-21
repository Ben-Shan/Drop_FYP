import {Component, ElementRef, ViewChild} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { DragulaService } from 'ng2-dragula';


@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css']
})
export class CenterComponentComponent {
  qrname = '';
  fname = '';
  @ViewChild('img') img: ElementRef;
  constructor(private httpClient: HttpClient) { }
  selectedFile: File = null;
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
    console.log(this.selectedFile);
  }
  onSubmit() {
    const formData = new FormData();
    const date = new Date().toISOString();
    this.fname = date + this.img.nativeElement.files[0].name;
    formData.append('name', this.img.nativeElement.files[0].name);
    formData.append('size', 'size');
    formData.append('imageFile',
      this.img.nativeElement.files[0], this.fname
      );

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.httpClient.post('http://178.62.39.172:3030/images', formData, {headers: headers})
      .subscribe(
        (response) => {
          console.log(response);
          this.qrname = this.fname;
        },
        (error) => {
          console.log(this.img.nativeElement.files[0].name + 'failed to upload, error:' + error);
        }
      );
  }
  getImage() {
    this.httpClient.get('http://178.62.39.172:3030/images')
      .subscribe(data => {
        console.log(data);
      });
  }
  //document.body.style.backgroundImage = 'url('http://178.62.39.172:3030/uploads/'+qrname)';
}

