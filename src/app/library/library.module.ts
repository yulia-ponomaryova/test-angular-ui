import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LibraryComponent} from "./library.component";
import {LibraryBookItemModule} from "./library-book/library-book-item.module";

@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    LibraryBookItemModule
  ],
  providers: [],
  exports: [
    LibraryComponent
  ],
  bootstrap: [LibraryComponent]
})
export class LibraryModule {
}
