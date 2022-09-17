import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookItemComponent } from './bookshelf/book-item/book-item.component';
import { BookshelfComponent } from './bookshelf/bookshelf.component';

import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    BookItemComponent,
    BookshelfComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
