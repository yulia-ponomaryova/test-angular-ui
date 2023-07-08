import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {UntypedFormControl, UntypedFormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookComponent implements OnInit {
  bookAddForm: UntypedFormGroup;

  constructor(public dialogRef: MatDialogRef<AddBookComponent>) {}

  bookDescriptionIsTooLong(): boolean{
    return this.bookAddForm.controls.description.hasError('maxlength');
  }

  ngOnInit(): void {
    this.bookAddForm = new UntypedFormGroup({
      imgUrl: new UntypedFormControl('', [Validators.required]),
      title: new UntypedFormControl('', [Validators.required]),
      author: new UntypedFormControl('', [Validators.required]),
      description: new UntypedFormControl('', [Validators.required, Validators.maxLength(350)]),
      isFavorite: new UntypedFormControl(false)
    });
  }

  addBook(): void {
    this.dialogRef.close(this.bookAddForm.value);
  }

  clearForm(): void {
    this.bookAddForm.reset();
  }
}
