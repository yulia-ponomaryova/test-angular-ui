import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {BookService} from '../shared/book.service';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookshelfComponent implements OnInit {
  booksOnShelf: Book[];

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.booksOnShelf = this.bookService.getAllBooks();
  }
}
