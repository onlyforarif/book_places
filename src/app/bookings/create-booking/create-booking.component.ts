import { Component, Input, OnInit, ViewChild } from '@angular/core';
// import { NgForm } from '@angular/forms';
import { ModalController } from '@ionic/angular';
import { Place } from 'src/app/places/place.model';

@Component({
  selector: 'app-create-booking',
  templateUrl: './create-booking.component.html',
  styleUrls: ['./create-booking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  @Input() selectedPlace: Place;
  // @ViewChild('f', {static: true}) form: NgForm;
  constructor(private modalCtl: ModalController) { }

  ngOnInit() {}

  onBookPlace(f){
    this.modalCtl.dismiss({message: 'This place is booked'}, 'confirmed');
  }

  onCancel(){
    this.modalCtl.dismiss(null, 'cancel');
  }
}
