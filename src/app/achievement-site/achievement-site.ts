import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardContent, MatCardSubtitle } from "@angular/material/card";


interface Achievement {
  title: string;
  description: string;
  image: string;
}


@Component({
  selector: 'app-achievement-site',
  imports: [MatCard, MatCardHeader, MatCardTitleGroup, MatCardTitle, MatCardContent, MatCardSubtitle],
  templateUrl: './achievement-site.html',
  styleUrl: './achievement-site.scss',
})
export class AchievementSite {
  achievements: Achievement[] = [
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
