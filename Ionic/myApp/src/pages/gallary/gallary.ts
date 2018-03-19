import {Component, ElementRef, ViewChild} from '@angular/core';
import {Alert, IonicPage, NavController, NavParams} from 'ionic-angular';
import { HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import {Http} from "@angular/http";

/**
 * Generated class for the GallaryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-gallary',
  templateUrl: 'gallary.html',
})


export class Gallary {
  qrname = '';
  fname = '';
  @ViewChild('img') img: ElementRef;
  constructor(private httpClient: HttpClient, nav: NavController) {
    // this.http = this.httpClient;
    // this.nav = nav;
  }

  // makeGetRequest() {
  //   this.http.get("https://httpbin.org/ip")
  //     .subscribe(data => {
  //       var alert = Alert.create({
  //         title: "Your IP Address",
  //         subTitle: data.json().origin,
  //         buttons: ["close"]
  //       });
  //       this.nav.present(alert);
  //     }, error => {
  //       console.log(JSON.stringify(error.json()));
  //     });
  // }

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
}
