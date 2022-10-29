import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LibraryComponent} from "./library.component";
import {BookItemModule} from "../bookshelf/book-item/book-item.module";

@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    BookItemModule
  ],
  providers: [],
  exports: [
    LibraryComponent
  ],
  bootstrap: [LibraryComponent]
})
export class LibraryModule {
}
