import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Book} from '../../shared/book.model';

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent {
  @Input() book: Book;

  showFavorite(): string {
    const HEART_SOLID = 'fa fa-heart fa-2x';
    const HEART_REGULAR = 'fa fa-heart-o fa-2x';
    return this.book.isFavorite ? HEART_SOLID : HEART_REGULAR;
  }

  markFavorite(): void {
    this.book.isFavorite = !this.book.isFavorite;
  }
}
