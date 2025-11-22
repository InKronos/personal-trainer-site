import { Component, signal } from '@angular/core';
import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import { OpinionCarousel } from '../components/opinion-carousel/opinion-carousel';
import { FormControl, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { merge } from 'rxjs';
import { MatIcon } from "@angular/material/icon";
@Component({
  selector: 'app-home-site',
  imports: [MatGridListModule, MatButtonModule, MatFormFieldModule, MatFormFieldModule, OpinionCarousel, MatInputModule, ReactiveFormsModule, MatCardModule, MatIcon],
  templateUrl: './home-site.html',
  styleUrl: './home-site.scss',
})
export class HomeSite {
  

}
