import { Directive, Input } from '@angular/core';
import { AbstractControl, FormGroup, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: 'form[roundTrip]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: RoundtripValidationDirective,
      multi: true
    }
  ]
})
export class RoundtripValidationDirective implements Validator{


  validate(c: AbstractControl): object {
    let group = c as FormGroup;
    let from = group.controls['from'];
    let to = group.controls['to'];

    if (!from || !to) return {};

    if (to.value == from.value) {
      return {roundTrip: true}
    }

    return {};
  }

}
