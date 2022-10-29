import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Book} from "./book.model";

@Component({
  selector: 'app-bookshelf',
  templateUrl: './bookshelf.component.html',
  styleUrls: ['./bookshelf.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookshelfComponent implements OnInit {

  booksOnShelf: Book[];

  ngOnInit(): void {
    this.booksOnShelf = JSON.parse(`[
      {
        "title" : "Теплі історії до кави",
        "description" : "Надійка Гербіш",
        "isFavorite" : false
      },
      {
        "title" : "Шоколад на крутом кипятке",
        "description" : "Лаура Эскивель",
        "isFavorite" : true
      },
      {
        "title" : "Профессия: ведьма",
        "description" : "Ольга Громыко",
        "isFavorite" : false
      }
    ]`);
  }

}
