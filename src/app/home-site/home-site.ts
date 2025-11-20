import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';
import { MatIcon } from '@angular/material/icon';
import { OpinionCarousel } from '../components/opinion-carousel/opinion-carousel';
@Component({
  selector: 'app-home-site',
  imports: [MatGridListModule, MatButtonModule, MatFormFieldModule, MatIcon, OpinionCarousel],
  templateUrl: './home-site.html',
  styleUrl: './home-site.scss',
})
export class HomeSite {


}
