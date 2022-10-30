import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Book} from "../../shared/book.model";

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookCardComponent {

  @Input() book: Book;

  showFavorite() {
    const HEART_SOLID = 'fa fa-heart fa-2x';
    const HEART_REGULAR = 'fa fa-heart-o fa-2x';
    return this.book.isFavorite ? HEART_SOLID : HEART_REGULAR;
  }

  markFavorite() {
    this.book.isFavorite = !this.book.isFavorite;
  }

}
