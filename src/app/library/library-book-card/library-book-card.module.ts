import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LibraryBookCardComponent} from './library-book-card.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    LibraryBookCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  exports: [
    LibraryBookCardComponent
  ],
  bootstrap: [LibraryBookCardComponent]
})
export class LibraryBookCardModule {
}
