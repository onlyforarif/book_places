import { Injectable } from "@angular/core";
import { Booking } from "./booking.model";

@Injectable({providedIn: 'root'})

export class BookingsService {
  private _bookings: Booking[] = [{
    id: 'abc',
    placeTitle: 'Islamabad',
    placeId: 'p1',
    userId: 'xyz',
    guestsNumber: 10
  }];

  get bookings(){
    return [...this._bookings];
  }

  constructor(){

  }
}