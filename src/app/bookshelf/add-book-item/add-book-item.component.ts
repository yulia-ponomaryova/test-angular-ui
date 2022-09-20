import { Component } from '@angular/core';
import {Book} from "../book.model";
import {BookService} from "../book.service";

@Component({
  selector: 'app-add-book-item',
  templateUrl: './add-book-item.component.html',
  styleUrls: ['./add-book-item.component.css']
})
export class AddBookItemComponent {

  bookToAdd: Book = new Book();

  constructor(private bookService: BookService) {}

  addBook() {
    let book = this.bookToAdd;
    this.bookService.addBook(book);
    this.bookToAdd = new Book();
  }

}
