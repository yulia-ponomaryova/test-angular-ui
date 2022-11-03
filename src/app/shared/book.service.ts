import {Injectable} from '@angular/core';
import {Book} from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  allBooks: Book[] = [
    {
      title: 'Теплі історії до кави',
      author: 'Надійка Гербіш',
      description: 'У цій книжці зібрані історії про почуття й настрої, сумніви й рішення, далеку дорогу й затишний дім, чужі міста й близьких людей, солодкий шоколад і терпкувато-гірку каву. У них немає однозначних висновків і незмінних рецептів, а є пошуки та віра в імпровізацію.',
      isFavorite: false
    },
    {
      title: 'Шоколад на крутом кипятке',
      author: 'Лаура Эскивель',
      description: 'Эта книга самым парадоксальным образом сочетает в себе реальность и вымысел, эротику и мистику, историю любви и рецепты блюд мексиканской кухни.',
      isFavorite: true
    },
    {
      title: 'Spinning Silver',
      author: 'Naomi Novik',
      description: 'The story of Spinning Silver unfolds in the voices of several characters, but primarily in the voices of three young women who struggle against strong evil forces, in an imaginary medieval eastern European kingdom called Lithvas.',
      isFavorite: false
    }
  ];

  public getAllBooks(): Book[] {
    return this.allBooks;
  }

  public addBook(book: Book): number {
    return this.allBooks.push(book);
  }

  public getLibraryBooks(): Book[] {
    return this.allBooks.filter(book => book.isFavorite);
  }
}
