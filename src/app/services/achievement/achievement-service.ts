import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AchievementService {
  getAll():Achievement[] {
    return [
      {
        title: "1 Miejsce w Gminnym konkursie",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: "images/1place.png"
      },
      {
        title: "2 Miejsce w Powiatowym konkursie",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: "images/2place.png"
      },
      {
        title: "3 Miejsce w Wojewódzkim konkursie",
        description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
        image: "images/3place.png"
      }
    ];
  }
    
  
}
