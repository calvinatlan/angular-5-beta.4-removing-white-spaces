import { TestBed, inject } from '@angular/core/testing';

import { FlightService } from './flight.service';

xdescribe('FlightService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FlightService]
    });
  });

  xit('should be created', inject([FlightService], (service: FlightService) => {
    expect(service).toBeTruthy();
  }));
});
