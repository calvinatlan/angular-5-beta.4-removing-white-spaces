import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CityPipe } from './pipes/city.pipe';
import { CityValidationDirective } from './validation/city-validation.directive';
import { RoundtripValidationDirective } from './validation/roundtrip-validation.directive';
import { AsyncCityValidationDirective } from './validation/async-city-validation.directive';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    CityPipe,
    CityValidationDirective,
    RoundtripValidationDirective,
    AsyncCityValidationDirective
  ],
  exports: [
    CityPipe,
    CityValidationDirective,
    RoundtripValidationDirective,
    AsyncCityValidationDirective
  ]
})
export class SharedModule { }
