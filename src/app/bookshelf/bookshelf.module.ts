import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BookshelfComponent} from "./bookshelf.component";

import {BookItemModule} from "./book-item/book-item.module";

@NgModule({
  declarations: [
    BookshelfComponent
  ],
  imports: [
    BrowserModule,
    BookItemModule
  ],
  providers: [],
  exports: [
    BookshelfComponent
  ],
  bootstrap: [BookshelfComponent]
})
export class BookshelfModule {
}
