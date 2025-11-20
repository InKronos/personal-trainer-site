import { Component, HostListener } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';


interface Opinion {
  author: string;
  text: string;
  stars: number;
}


@Component({
  selector: 'app-opinion-carousel',
  imports: [MatIcon, MatButtonModule],
  templateUrl: './opinion-carousel.html',
  styleUrl: './opinion-carousel.scss',
})
export class OpinionCarousel {
  opinions: Opinion[] = [
    { author: 'Michał', text: 'Trener jest super, bardzo polecam', stars: 5 },
    { author: 'Kasia', text: 'Trener jest super, bardzo polecam', stars: 5 },
    { author: 'Stasiek', text: 'Trener jest super, bardzo polecam', stars: 5 },
    { author: 'Ania', text: 'Mega atmosfera i świetne efekty!', stars: 5 },
    { author: 'Paweł', text: 'Profesjonalne podejście', stars: 5 }
  ];

  index = 0;
  visibleCount = 3;
  ngOnInit(): void {
    this.updateVisibleCount(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    const prev = this.visibleCount;
    this.updateVisibleCount(e.target.innerWidth);
    if (this.index > this.maxIndex) {
      this.index = this.maxIndex;
    }
  }

  private updateVisibleCount(width: number) {
    if (width >= 1200) {
      this.visibleCount = 3;
    } else if (width >= 700) {
      this.visibleCount = 2;
    } else {
      this.visibleCount = 1;
    }
  }

  get maxIndex(): number {
    return Math.max(0, this.opinions.length - this.visibleCount);
  }

  prev() {
    if (this.index > 0) this.index--;
    else {
      this.index = this.opinions.length - 3;
    }
  }

  next() {
    if (this.index < this.opinions.length - 3) this.index++;
    else {
      this.index = 0;
    }
  }

   get translatePercent(): number {
    // przesuwamy kartę o szerokość jednej "slot" w procentach
    // jeden slot = 100 / visibleCount %
    return -(this.index * (100 / this.visibleCount));
  }
}
