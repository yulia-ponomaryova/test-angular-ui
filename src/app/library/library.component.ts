import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {BookService} from '../shared/book.service';

@Component({
  selector: 'app-library',
  templateUrl: './library.component.html',
  styleUrls: ['./library.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryComponent implements OnInit {
  booksInLibrary: Book[];

  constructor(private bookService: BookService) {
  }

  ngOnInit(): void {
    this.booksInLibrary = this.bookService.getLibraryBooks();
  }
}
