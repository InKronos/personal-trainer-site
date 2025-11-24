import { Component } from '@angular/core';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  isOpen = false;

toggleLi() {
  if(document.body.style.overflow === 'hidden'){
    this.isOpen = !this.isOpen;
  }
}
toggleMenu() {
  this.isOpen = !this.isOpen;
  if (this.isOpen) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = 'auto';
  }
}
}
