import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {BookItemComponent} from "./book-item.component";

import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  exports: [
    BookItemComponent
  ],
  bootstrap: [BookItemComponent]
})
export class BookItemModule {
}
