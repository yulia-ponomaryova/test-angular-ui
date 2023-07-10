import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {Book} from '../shared/book.model';
import {BookService} from '../shared/book.service';
import {AddBookComponent} from './add-book/add-book.component';
import {MatDialog} from '@angular/material/dialog';

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookshelfComponent implements OnInit {
  booksOnShelf: Book[];

  constructor(private bookService: BookService,
              public dialog: MatDialog,
              private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.booksOnShelf = this.bookService.getAllBooks();
  }

  openAddBookDialog(): void {
    this.dialog.open(AddBookComponent, {
      height: 'auto',
      width: '600px',
    }).afterClosed().subscribe(bookToAdd => {
      if (bookToAdd) {
        this.bookService.addBook(bookToAdd);
        this.changeDetectorRef.detectChanges();
      }
    });
  }
}
