import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css']
})
export class CenterComponentComponent implements OnInit {
  number = '';
  constructor ( private httpClient: HttpClient ) { }

  postProfile() {
    this.httpClient.post('178.62.39.172:3000/addImage', {
      name: 'mark',
      id: 21
    })
      .subscribe(
        (data: any ) => {
          console.log(data);
        }
      );
  }

  ngOnInit() {
  }

}
