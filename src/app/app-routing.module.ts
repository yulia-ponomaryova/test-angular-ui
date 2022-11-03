import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {BookshelfComponent} from './bookshelf/bookshelf.component';
import {LibraryComponent} from './library/library.component';

const routes: Routes = [
  {path: 'books', component: BookshelfComponent},
  {path: 'library', component: LibraryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
