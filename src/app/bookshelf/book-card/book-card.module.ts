import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {BookCardComponent} from './book-card.component';

import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    BookCardComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  exports: [
    BookCardComponent
  ],
  bootstrap: [BookCardComponent]
})
export class BookCardModule {
}
