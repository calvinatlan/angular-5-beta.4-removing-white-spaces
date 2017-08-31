import { Directive, Input } from '@angular/core';
import {
  AbstractControl, AsyncValidator, FormGroup, NG_ASYNC_VALIDATORS, NG_VALIDATORS,
  Validator
} from '@angular/forms';
import { Observable } from 'rxjs/Observable';
import { FlightService } from "app/flight-booking/flight-search/flight.service";

@Directive({
  selector: 'input[asyncCity]',
  providers: [
    {
      provide: NG_ASYNC_VALIDATORS,
      useExisting: AsyncCityValidationDirective,
      multi: true
    }
  ]
})
export class AsyncCityValidationDirective implements AsyncValidator{

  constructor(private flightService: FlightService) {
  }

  validate(c: AbstractControl): Observable<object> {

    let city = c.value;

    return this
            .flightService
            .find(city, '')
            .map(flights => flights.length)
            .map(len => (len > 0) ? {} : {asyncCity: true} );
            //.delay(4000);
  }
}
