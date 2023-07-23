import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {LibraryBookComponent} from './library-book.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    LibraryBookComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  exports: [
    LibraryBookComponent
  ],
  bootstrap: [LibraryBookComponent]
})
export class LibraryBookItemModule {
}
