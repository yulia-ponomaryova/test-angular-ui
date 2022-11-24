import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AddBookComponent} from './add-book.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AddBookComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ],
  exports: [
    AddBookComponent
  ],
  bootstrap: [AddBookComponent]
})
export class AddBookModule {
}
