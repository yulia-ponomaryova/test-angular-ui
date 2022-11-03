import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BookService} from '../../shared/book.service';
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

  constructor(public dialogRef: MatDialogRef<AddBookComponent>,
              private bookService: BookService) {}

  ngOnInit(): void {
    this.clearForm();
  }

  addBook(): void {
    const book = this.bookAddForm.value;
    this.bookService.addBook(book);
    this.dialogRef.close(true);
  }

  clearForm(): void {
    this.bookAddForm = new FormGroup({
      imgUrl: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      author: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isFavorite: new FormControl(false)
    });
  }
}
