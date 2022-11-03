import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Book} from '../../shared/book.model';

@Component({
  selector: 'app-library-book-card',
  templateUrl: './library-book-card.component.html',
  styleUrls: ['./library-book-card.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryBookCardComponent {
  @Input() book: Book;
}
