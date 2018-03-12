import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css']
})
export class CenterComponentComponent implements OnInit {
  number = 'hello Jack ye big ol goob';
  constructor() { }

  ngOnInit() {
  }

}
