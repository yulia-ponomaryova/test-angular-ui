import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BookshelfComponent} from "./bookshelf.component";

import {BookCardModule} from "./book-card/book-card.module";
import {AddBookItemModule} from "./add-book-item/add-book-item.module";

@NgModule({
  declarations: [
    BookshelfComponent
  ],
  imports: [
    BrowserModule,
    BookCardModule,
    AddBookItemModule
  ],
  providers: [],
  exports: [
    BookshelfComponent
  ],
  bootstrap: [BookshelfComponent]
})
export class BookshelfModule {
}
