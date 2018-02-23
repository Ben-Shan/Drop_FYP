import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css']
})
export class CenterComponentComponent implements OnInit {
  number = '1';
  constructor() { }

  ngOnInit() {
  }

}
