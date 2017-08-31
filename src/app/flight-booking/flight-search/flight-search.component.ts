import { Component, OnInit } from '@angular/core';
import { Flight } from '../../entities/flight';
import { Http, Headers, URLSearchParams } from '@angular/http';
import { FlightService } from './flight.service';
//              ^^^-------^^^---- Muss explizit importiert werden!!

@Component({
  selector: 'flight-search',
  templateUrl: './flight-search.component.html',
  styleUrls: ['./flight-search.component.css'],
  preserveWhitespaces: false,
  providers: []
})
export class FlightSearchComponent implements OnInit {

  from: string = 'Hamburg';
  to: string = 'Graz';

  selectedFlight: Flight;

  basket: object = {
    "3": true,
    "4": false,
    "5": true
  };

  constructor(private flightService: FlightService) {
    console.debug('');
  }

  // flights: Array<Flight> = [];

  // {{ flights.length }}
  get flights() {
    return this.flightService.flights;
  }

  ngOnInit() {
  }

  search(): void {

    if (!this.from || !this.to) return;

    this.flightService.load(this.from, this.to);


  }

  select(f: Flight): void {
    this.selectedFlight = f;
  }
}
