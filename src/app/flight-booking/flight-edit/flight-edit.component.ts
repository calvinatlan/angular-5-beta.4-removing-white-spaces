import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FlightService } from "app/flight-booking/flight-search/flight.service";
import { Flight } from "app/entities/flight";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { RoundTripValidator } from "app/shared/validation/round-trip-validator";

@Component({
  selector: 'app-flight-edit',
  templateUrl: './flight-edit.component.html',
  styleUrls: ['./flight-edit.component.css'],
  preserveWhitespaces: false
})
export class FlightEditComponent implements OnInit {

  id: string;
  showDetails: string;

  constructor(
    private route: ActivatedRoute,
    private flightService: FlightService,
    private fb: FormBuilder ) {
  }

  flight: Flight;
  form: FormGroup;

  ngOnInit() {

    this.form = new FormGroup({
      id: new FormControl(),
      from: new FormControl('', {
        validators: [
          Validators.required,
          Validators.minLength(3)
        ],
        updateOn: 'blur'
      }), 
      to: new FormControl(),
      date: new FormControl()
    }, { updateOn: 'blur' });

    this.form.validator = RoundTripValidator.validate;
    
    this.route
        .params
        .do(params => {
          this.id = params['id'];
          this.showDetails = params['showDetails'];
        })
        .flatMap(p => this.flightService.findById(p['id']))
        .subscribe(
          f => {
            this.flight = f;
            this.form.patchValue(f);
          },
          err => { 
            console.error(err)
          }
        );
  }

  save() {
    console.debug('save is not implemented for this demo.')
    console.debug('valid', this.form.valid);
  }

}
