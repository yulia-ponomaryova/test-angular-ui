import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';

import {BookshelfModule} from './bookshelf/bookshelf.module';
import {AppRoutingModule} from './app-routing.module';
import {HeaderModule} from './header/header.module';
import {LibraryModule} from './library/library.module';
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BookshelfModule,
    LibraryModule,
    AppRoutingModule,
    HeaderModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
