import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {BookshelfModule} from "./bookshelf/bookshelf.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BookshelfModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
