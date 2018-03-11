import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor ( private httpClient: HttpClient ) { }

  postProfile() {
    this.httpClient.post('178.62.39.172', {
        name: 'mark',
        age: 21
      })
      .subscribe(
        (data: any ) => {
          console.log(data);
        }
      );
  }
}
