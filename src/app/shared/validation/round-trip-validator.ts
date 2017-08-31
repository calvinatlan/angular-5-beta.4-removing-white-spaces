import { AbstractControl, FormGroup } from "@angular/forms";

export class RoundTripValidator {

    static validate(c: AbstractControl): object {
        let group = c as FormGroup;
        let from = group.controls['from'];
        let to = group.controls['to'];
    
        if (to.value == from.value) {
          return {roundTrip: true}
        }
    
        return {};
      }
}