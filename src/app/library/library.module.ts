import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {LibraryComponent} from "./library.component";
import {LibraryBookCardModule} from "./library-book-card/library-book-card.module";

@NgModule({
  declarations: [
    LibraryComponent
  ],
  imports: [
    BrowserModule,
    LibraryBookCardModule
  ],
  providers: [],
  exports: [
    LibraryComponent
  ],
  bootstrap: [LibraryComponent]
})
export class LibraryModule {
}
