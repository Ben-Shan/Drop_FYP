import { Component } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css']
})
export class CenterComponentComponent {
  url = 'hello there';
  selectedFile: File = null;

  constructor(private http: HttpClient) {}
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
  }
  onUpload() {
    const fd = new FormData();
    fd.append('image', this.selectedFile, this.selectedFile.name);
    this.http.post('178.62.39.172:3030/images', fd, {
      reportProgress: true
    } )
      .subscribe(res => {
        console.log(res);
      });
  }

}
