import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: 'input[city]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: CityValidationDirective,
      multi: true
    }
  ]
})
export class CityValidationDirective implements Validator{

  @Input() city: string

  validate(c: AbstractControl): object {

    let actualCity = c.value;
    let allowedCities = this.city.split(',');
    if (allowedCities.indexOf(actualCity ) > -1) {
      return {};
    }

    return {
      city: {
        actualCity,
        allowedCities,
        reason: 42,
        tryAgain: 2021
      }
    }
  }

}
