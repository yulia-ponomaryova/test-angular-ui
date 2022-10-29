import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BookshelfModule} from "./bookshelf/bookshelf.module";
import {AppRoutingModule} from "./app-routing.module";
import {HeaderModule} from "./header/header.module";
import {LibraryModule} from "./library/library.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookshelfModule,
    LibraryModule,
    AppRoutingModule,
    HeaderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
