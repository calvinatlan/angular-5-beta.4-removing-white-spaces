import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-passenger-search',
  templateUrl: './passenger-search.component.html',
  styleUrls: ['./passenger-search.component.css'],
  preserveWhitespaces: false
})
export class PassengerSearchComponent implements OnInit {

  constructor() { }
  
  pName: string;

  ngOnInit() {
  }

}
