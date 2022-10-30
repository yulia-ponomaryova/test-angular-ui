import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BookshelfComponent} from "./bookshelf.component";

import {BookCardModule} from "./book-card/book-card.module";
import {AddBookModule} from "./add-book/add-book.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {MatDialogModule} from "@angular/material/dialog";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [
    BookshelfComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BookCardModule,
    MatDialogModule,
    AddBookModule,
    MatButtonModule,
    MatIconModule
  ],
  providers: [],
  exports: [
    BookshelfComponent
  ],
  bootstrap: [BookshelfComponent]
})
export class BookshelfModule {
}
