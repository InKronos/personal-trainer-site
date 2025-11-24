import { Component, HostListener } from '@angular/core';
import { MatButton, MatButtonModule } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { Stars } from '../stars/stars';


interface Opinion {
  author: string;
  text: string;
  stars: number;
}


@Component({
  selector: 'app-opinion-carousel',
  imports: [MatIcon, MatButtonModule, Stars],
  templateUrl: './opinion-carousel.html',
  styleUrl: './opinion-carousel.scss',
})
export class OpinionCarousel {
  opinions: Opinion[] = [
    { author: 'Michał', text: 'Trener jest super, bardzo polecam', stars: 5 },
    { author: 'Kasia', text: 'Każdy trening dodaje mi pewności siebie.', stars: 3 },
    { author: 'Stasiek', text: 'Każdy trening poprawia mi kondycję.', stars: 5 },
    { author: 'Ania', text: 'Uwielbiam trenować z Pawełem', stars: 4.5 },
    { author: 'Paweł', text: 'Z Trenerem ćwiczę regularnie i jest super', stars: 5 }
  ];

  index = 0;
  visibleCount = 3;
  private intervalId: any;

  ngOnInit(): void {
    this.updateVisibleCount(window.innerWidth);
    this.startAutoPlay(); 
  }
  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  startAutoPlay() {
    this.intervalId = setInterval(() => {
      this.autoNext();
    }, 6000); // przesuwanie co 3 sekundy
  }

  autoNext() {
    if (this.index < this.maxIndex) {
      this.index++;
    } else {
      this.index = 0; // restart od początku (zapętlenie)
    }
  }
  
  @HostListener('window:resize', ['$event'])
  onResize(e: any) {
    const prev = this.visibleCount;
     console.log(window.innerWidth);
    this.updateVisibleCount(e.target.innerWidth);
    if (this.index > this.maxIndex) {
      this.index = this.maxIndex;
    }
  }

  private updateVisibleCount(width: number) {
   
    if (width >= 1200) {
      this.visibleCount = 3;
    } else if (width >= 900) {
      this.visibleCount = 2;
      console.log("here2");
    } else {
      this.visibleCount = 1;
      console.log("here1");
    }
  }

  get maxIndex(): number {
    return Math.max(0, this.opinions.length - this.visibleCount);
  }

  prev() {
    if (this.index > 0) this.index--;
    else {
      this.index = this.opinions.length - this.visibleCount;
    }
    
  }

  next() {
    console.log(this.visibleCount);
    if (this.index < this.opinions.length - this.visibleCount) this.index++;
    else {
      this.index = 0;
    }
  }

   get translatePercent(): number {
    
    return -(this.index * (100 / this.visibleCount));
  }

  
}
