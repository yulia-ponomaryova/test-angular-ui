import { Injectable } from '@angular/core';
import {Book} from "./book.model";

@Injectable({
  providedIn: 'root',
})
export class BookService {

  allBooks: Book[] = [
    {
      title : "Теплі історії до кави",
      description : "Надійка Гербіш",
      isFavorite : false
    },
    {
      title : "Шоколад на крутом кипятке",
      description : "Лаура Эскивель",
      isFavorite : true
    },
    {
      title : "Профессия: ведьма",
      description : "Ольга Громыко",
      isFavorite : false
    }
  ];

  constructor() { }

  public getAllBooks() {
    return this.allBooks;
  }

  public addBook(book: Book) {
    return this.allBooks.push(book);
  }

  public getLibraryBooks() {
    return this.allBooks.filter(book => book.isFavorite);
  }

}
