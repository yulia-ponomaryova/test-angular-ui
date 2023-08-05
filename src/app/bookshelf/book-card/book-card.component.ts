import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input} from '@angular/core';
import {Book} from '../../shared/book.model';
import {BookService} from "../../shared/book.service";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {
  @Input() book: Book;

  constructor(private bookService: BookService,
              private changeDetectorRef: ChangeDetectorRef) {}

  showFavorite(): string {
    const HEART_SOLID = 'fa fa-heart fa-2x';
    const HEART_REGULAR = 'fa fa-heart-o fa-2x';
    return this.book.isFavorite ? HEART_SOLID : HEART_REGULAR;
  }

  markFavorite(): void {
    this.bookService.favorBook(this.book.id)
      .subscribe(() => {
          this.book.isFavorite = !this.book.isFavorite;
          this.changeDetectorRef.detectChanges();
        }
      );
  }
}
