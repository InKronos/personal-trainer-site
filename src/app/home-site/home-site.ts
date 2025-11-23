import { Component, signal } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { OpinionCarousel } from '../components/opinion-carousel/opinion-carousel';
import { MatIcon } from "@angular/material/icon";
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ContactForm } from "../components/contact-form/contact-form";
@Component({
  selector: 'app-home-site',
  imports: [MatGridListModule, MatButtonModule, MatFormFieldModule, MatFormFieldModule, OpinionCarousel, MatInputModule, MatCardModule, MatIcon, ContactForm],
  templateUrl: './home-site.html',
  styleUrl: './home-site.scss',
})
export class HomeSite {

  facebookIcon: string = 'facebook-black';
  instagramIcon: string = 'instagram-black';
  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'facebook-black',
      sanitizer.bypassSecurityTrustResourceUrl('icons/facebook-black.svg')
    );
     iconRegistry.addSvgIcon(
      'instagram-black',
      sanitizer.bypassSecurityTrustResourceUrl('icons/instagram-black.svg')
    );
    iconRegistry.addSvgIcon(
      'facebook-color',
      sanitizer.bypassSecurityTrustResourceUrl('icons/facebook-color.svg')
    );
     iconRegistry.addSvgIcon(
      'instagram-color',
      sanitizer.bypassSecurityTrustResourceUrl('icons/instagram-color.svg')
    );
}

}
