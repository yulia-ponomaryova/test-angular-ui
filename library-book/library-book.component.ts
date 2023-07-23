import {ChangeDetectionStrategy, Component, Input} from '@angular/core';
import {Book} from '../src/app/shared/book.model';

@Component({
  selector: 'app-library-book',
  templateUrl: './library-book.component.html',
  styleUrls: ['./library-book.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LibraryBookComponent {
  @Input() book: Book;
}
