import {Injectable} from '@angular/core';
import {Book} from './book.model';
import {HttpClient, HttpHeaders} from "@angular/common/http";
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

  public addToLibrary(bookId: string): Observable<any> {
/*    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');*/
    return this.http.post<Book>(this.apiUrl.concat('/book/').concat(bookId).concat('/library'),
      true/*, {headers}*/);
  }

  public removeFromLibrary(bookId: string): Observable<any> {
/*    const headers= new HttpHeaders()
      .set('content-type', 'application/json')
      .set('Access-Control-Allow-Origin', '*');*/
    return this.http.post<Book>(this.apiUrl.concat('/book/').concat(bookId).concat('/library'),
      false/*, {headers}*/);
  }

}
