import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookComponent implements OnInit {
  bookAddForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AddBookComponent>) {}

  bookDescriptionIsTooLong(): boolean{
    return this.bookAddForm.controls.description.hasError('maxlength');
  }

  ngOnInit(): void {
    this.bookAddForm = new FormGroup({
      imgUrl: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required, Validators.maxLength(350)]),
      isFavorite: new FormControl(false)
    });
  }

  addBook(): void {
    this.dialogRef.close(this.bookAddForm.value);
  }

  clearForm(): void {
    this.bookAddForm.reset();
  }
}
