import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
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

  constructor(private bookService: BookService,
              private changeDetectorRef: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.bookService.getLibraryBooks()
      .subscribe(data => {
        this.booksInLibrary = data;
        this.changeDetectorRef.detectChanges();
      });
  }
}
