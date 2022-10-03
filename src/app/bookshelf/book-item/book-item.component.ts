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

  selectBook() {
    this.book.isFavorite = !this.book.isFavorite;
  }

}
