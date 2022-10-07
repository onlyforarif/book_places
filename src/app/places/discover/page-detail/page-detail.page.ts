import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActionSheetController, ModalController, NavController } from '@ionic/angular';
import { CreateBookingComponent } from '../../../bookings/create-booking/create-booking.component';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-page-detail',
  templateUrl: './page-detail.page.html',
  styleUrls: ['./page-detail.page.scss'],
})
export class PageDetailPage implements OnInit {
  place: Place;
  constructor(
    private navCtrl: NavController,
    private placesService: PlacesService,
    private route: ActivatedRoute,
    private modalCtl: ModalController,
    private activeSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(paramMap => {
      if (!paramMap.has('placeId')) {
        this.navCtrl.navigateBack('/places/tabs/discover');
        return;
      }
      this.place = this.placesService.getPlace(paramMap.get('placeId'));
    });
  }

  onBookButton() {

    this.activeSheetCtrl.create({
      header: 'Choose an option',
      buttons: [
      {
        text: 'Select Date',
        handler: () => {
          this.onBookingModal('select')
        },
      },
      {
        text: 'Random Date',
        handler: () => {
          this.onBookingModal('random')
        },
      },
      {
        text: 'Cancel',
        role: 'cancel'
      }]
    }).then(actionSheetEl => {
      actionSheetEl.present();
    });
  }

  onBookingModal(model: 'select' | 'random'){
    this.modalCtl.create({
      component: CreateBookingComponent,
      componentProps: {selectedPlace: this.place}
    }).then(modalEl => {
      modalEl.present();
      return modalEl.onDidDismiss();
    })
    .then(resultData => {
      console.log(resultData.data, resultData.role);
      if(resultData.role === 'confirmed'){
        console.log('CONFIRMED');
      }
    });
  }
}
