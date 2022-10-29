import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookshelfComponent } from "./bookshelf/bookshelf.component";

const routes: Routes = [
  { path: 'books', component: BookshelfComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
