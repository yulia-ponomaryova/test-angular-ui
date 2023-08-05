import {Injectable} from '@angular/core';
import {Book} from './book.model';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class BookService {

  apiUrl = 'http://localhost:8081/api';

  constructor(private http: HttpClient) { }

  public getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl.concat('/books'));
  }

  public addBook(book: Book): Observable<any> {
    return this.http.post<Book>(this.apiUrl.concat('/book'), book);
  }

  public getLibraryBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl.concat('/library'));
  }

  public favorBook(bookId: string): Observable<any> {
    return this.http.get<Book>(this.apiUrl.concat('/book/').concat(bookId).concat('/library'));
  }

}
