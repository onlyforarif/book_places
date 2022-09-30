import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {
  private _places: Place[] = [
    new Place(
      'p1',
      'Islamabad',
      'Capital of Pakistan',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Faisal_Masjid_From_Damn_e_koh.jpg/800px-Faisal_Masjid_From_Damn_e_koh.jpg',
      150
    ),
    new Place(
      'p2',
      'Rawalpindi',
      'Near Islamabad, an old city',
      'https://i.tribune.com.pk/media/images/80670-aviewofpresentdayrawalpindidowntownjpg-1555672206/80670-aviewofpresentdayrawalpindidowntownjpg-1555672206.jpg',
      120
    ),
    new Place(
      'p3',
      'Peshawar',
      'Capital of KPK',
      'https://dynamic-media-cdn.tripadvisor.com/media/photo-o/09/92/47/2b/islamic-college-university.jpg?w=500&h=-1&s=1',
      100
    )
  ];

  get places(){
    return [...this._places];
  }

  getPlace(id: string){
    return {...this._places.find(
      p => p.id === id
    )};
  }

  constructor() { }
}
