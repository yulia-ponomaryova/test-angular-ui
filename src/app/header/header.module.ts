import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {HeaderComponent} from "./header.component";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {RouterModule} from "@angular/router";

@NgModule({
  declarations: [
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule
  ],
  providers: [],
  exports: [
    HeaderComponent
  ],
  bootstrap: [HeaderComponent]
})
export class HeaderModule {
}
