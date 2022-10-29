import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {BookService} from "../../shared/book.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-add-book-item',
  templateUrl: './add-book-item.component.html',
  styleUrls: ['./add-book-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddBookItemComponent implements OnInit {

  bookAddForm: FormGroup;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.clearForm();
  }

  addBook() {
    let book = this.bookAddForm.value;
    this.bookService.addBook(book);
    this.clearForm();
  }

  clearForm() {
    this.bookAddForm = new FormGroup({
      title: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      isFavorite: new FormControl(false)
    });
  }

}
