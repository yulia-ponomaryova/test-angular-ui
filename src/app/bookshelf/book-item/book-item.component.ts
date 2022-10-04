import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Book} from "../book.model";

@Component({
  selector: 'app-book-item',
  templateUrl: './book-item.component.html',
  styleUrls: ['./book-item.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookItemComponent {

  @Input() book: Book;

  showFavorite() {
    return this.book.isFavorite ? 'fa fa-heart fa-2x' : 'fa fa-heart-o fa-2x';
  }

  markFavorite() {
    this.book.isFavorite = !this.book.isFavorite;
  }

}
