import { Component, OnInit } from '@angular/core';
import { Booking } from './booking.model';
import { BookingsService } from './bookings.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  loadedBookings: Booking[];
  constructor(private bookingService: BookingsService) { }

  ngOnInit() {
    this.loadedBookings = this.bookingService.bookings;
  }

  onCancelBooking(bookingId: string){
    
  }
}
