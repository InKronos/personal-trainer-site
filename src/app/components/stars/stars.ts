import { Component, Input, OnInit } from '@angular/core';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'app-stars',
  imports: [MatIcon],
  templateUrl: './stars.html',
  styleUrl: './stars.scss',
})
export class Stars implements OnInit {
  @Input()
  stars!:number;

  starsName:string[] = [];

  ngOnInit(): void {
    for(let i = 0; i < 5; i++){
      if(this.stars - i >= 1){
        this.starsName.push("star");
      }
      else if(this.stars - i == 0.5){
        this.starsName.push("star_half");
      }
      else{
        this.starsName.push("star_outline");
      }
    }
  }
}
