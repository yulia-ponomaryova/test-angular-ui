import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AddBookItemComponent} from "./add-book-item.component";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AddBookItemComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule,
    FormsModule,
    MatFormFieldModule
  ],
  providers: [],
  exports: [
    AddBookItemComponent
  ],
  bootstrap: [AddBookItemComponent]
})
export class AddBookItemModule {
}
