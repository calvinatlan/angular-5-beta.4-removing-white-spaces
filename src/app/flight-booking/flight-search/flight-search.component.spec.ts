import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightSearchComponent } from './flight-search.component';
import { HttpModule } from '@angular/http';
import { FlightBookingModule } from '../flight-booking.module';
import { BASE_URL } from '../../app.tokens';

import 'rxjs';
// ^---- Alle Methoden importieren
//       Nicht für Production Build

import { Observable } from 'rxjs/Observable';
import { Flight } from '../../entities/flight';
import { FlightService } from './flight.service';

let flightServiceDummy = {
  find(from: string, to: string): Observable<Flight[]> {
    return Observable.of([
      {
        id: 4711,
        from: 'hier',
        to: 'dort',
        date: 'jetzt'
      },
      {
        id: 4711,
        from: 'hier',
        to: 'dort',
        date: 'jetzt'
      },
      {
        id: 4711,
        from: 'hier',
        to: 'dort',
        date: 'jetzt'
      },
      {
        id: 4711,
        from: 'hier',
        to: 'dort',
        date: 'jetzt'
      }
    ])
  }
};

describe('FlightSearchComponent', () => {
  let component: FlightSearchComponent;
  let fixture: ComponentFixture<FlightSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[
        HttpModule,
        FlightBookingModule
      ],
      declarations: [],
      providers: [
        { provide: BASE_URL,  useValue: 'http://www.angular.at/api' }
      ]
    })
    .compileComponents();

    TestBed.overrideComponent(
      FlightSearchComponent,
      {
        set: {
          providers: [
            { provide: FlightService, useValue: flightServiceDummy }
          ]
        }
      }).compileComponents();

  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlightSearchComponent);
    component = fixture.componentInstance;
  });

  it('should have no flights initially', () => {
    expect(component.flights.length).toBe(0);
  });

  it('should not load flights without from and to', () => {
    component.from = '';
    component.to = '';
    component.search();
    expect(component.flights.length).toBe(0);
  });

  it('should load flights with from and to', () => {
    component.from = 'Hamburg';
    component.to = 'Graz';
    component.search();
    expect(component.flights.length).toBe(4);
  });

});
