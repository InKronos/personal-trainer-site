import {ChangeDetectionStrategy, Component, signal} from '@angular/core';import { MatFormField, MatLabel } from "@angular/material/form-field";
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatAnchor } from "@angular/material/button";
import { MatButtonModule } from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';import {takeUntilDestroyed} from '@angular/core/rxjs-interop';
import {merge} from 'rxjs';

@Component({
  selector: 'app-contact-form',
  imports: [MatFormField, MatLabel, MatCheckboxModule, MatAnchor, MatButtonModule, MatInputModule, ReactiveFormsModule],
  templateUrl: './contact-form.html',
  styleUrl: './contact-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactForm {
  readonly email = new FormControl('', [Validators.required, Validators.email]);
  readonly title = new FormControl('', [Validators.required]);
  readonly text = new FormControl('', [Validators.required]);
  readonly checked = new FormControl(false);
  errorMessageEmail = signal('');
  errorMessageTitle = signal('');
  errorMessageText = signal('');

  constructor() {
    merge(this.email.statusChanges, this.email.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageEmail());
    merge(this.title.statusChanges, this.title.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageTitle());
    merge(this.text.statusChanges, this.text.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageText());
  }

  updateErrorMessageEmail() {
    if (this.email.hasError('required')) {
      this.errorMessageEmail.set('Musisz podać email');
    } else if (this.email.hasError('email')) {
      this.errorMessageEmail.set('Zły format email\'a');
    } else {
      this.errorMessageEmail.set('');
    }
  }

  updateErrorMessageTitle() {
    if (this.title.hasError('required')) {
      this.errorMessageTitle.set('Musisz podać tytuł wiadomości');
    } else {
      this.errorMessageTitle.set('');
    }
  }

  updateErrorMessageText() {
    if (this.text.hasError('required')) {
      this.errorMessageText.set('Musisz podać treść wiadomości');
    } else {
      this.errorMessageText.set('');
    }
  }
}
