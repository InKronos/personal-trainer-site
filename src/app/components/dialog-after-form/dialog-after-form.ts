import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { MatDialogContent, MatDialogActions, MatDialogRef, MatDialogClose, MatDialogTitle} from "@angular/material/dialog";
import { MatCheckbox } from "@angular/material/checkbox";
import { MatError } from "@angular/material/form-field";
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { merge } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-dialog-after-form',
  imports: [MatDialogContent, MatDialogActions, MatCheckbox, MatError, ReactiveFormsModule, MatButtonModule, MatDialogTitle],
  templateUrl: './dialog-after-form.html',
  styleUrl: './dialog-after-form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogAfterForm {
  readonly checked = new FormControl(false);
  readonly dialogRef = inject(MatDialogRef<DialogAfterForm>)
  errorMessageChcekBox = signal(' ');


  constructor() {
    merge(this.checked.statusChanges, this.checked.valueChanges)
      .pipe(takeUntilDestroyed())
      .subscribe(() => this.updateErrorMessageCheckbox());  
  }

  updateErrorMessageCheckbox() {
    if (!this.checked.value) {
      this.errorMessageChcekBox.set('Musisz potwierdzić, że nie jesteś robotem');
      this.checked.markAsTouched();
    } else {
      this.errorMessageChcekBox.set(' ');
    }
  }
  onSendClick() : void {
    if(this.checked.value)
      this.onCloseClick();
    else
      this.updateErrorMessageCheckbox();
  }
  onCloseClick(): void {
    this.dialogRef.close();
  }
  
}
