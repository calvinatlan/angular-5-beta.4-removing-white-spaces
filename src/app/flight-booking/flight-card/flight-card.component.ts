import {
  Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges,
  ViewEncapsulation
} from '@angular/core';
import { Flight } from '../../entities/flight';

@Component({
  selector: 'flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css'],
  preserveWhitespaces: false
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {


  constructor() {
    console.debug('ctor', this.selected, this.item);
  }

  @Input() item: Flight;
  @Input() selected: boolean;
  @Output() selectedChange = new EventEmitter<boolean>();

  ngOnInit() {
    console.debug('ngOnInit', this.selected, this.item);
    //this.selectedChange.next(true);
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.debug('ngOnChanges', this.selected, this.item);

    if (changes['item']) {
      console.debug('\titem changed');
    }
    if (changes['selected']) {
      console.debug('\tselected changed');
    }


  }

  select() {
    this.selected = true;
    this.selectedChange.next(this.selected);
  }

  deselect() {
    this.selected = false;
    this.selectedChange.next(this.selected);
  }

  ngOnDestroy(): void {
    console.debug('ngOnDestroy');
  }

}
