import {Injectable} from '@angular/core';
import {Book} from './book.model';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  allBooks: Book[] = [
    {
      imgUrl: "https://s1.livelib.ru/boocover/1000567113/o/bac3/Nadijka_Gerbish__Tepli_istoriyi_do_kavi.jpeg",
      title: 'Теплі історії до кави',
      author: 'Надійка Гербіш',
      description: 'У цій книжці зібрані історії про почуття й настрої, сумніви й рішення, далеку дорогу й затишний дім, чужі міста й близьких людей, солодкий шоколад і терпкувато-гірку каву. У них немає однозначних висновків і незмінних рецептів, а є пошуки та віра в імпровізацію.',
      isFavorite: false
    },
    {
      imgUrl: "https://anylang.net/sites/default/files/covers/como-agua-para-chocolate.jpg",
      title: 'Шоколад на крутом кипятке',
      author: 'Лаура Эскивель',
      description: 'Эта книга самым парадоксальным образом сочетает в себе реальность и вымысел, эротику и мистику, историю любви и рецепты блюд мексиканской кухни.',
      isFavorite: true
    },
    {
      imgUrl: "https://kbimages1-a.akamaihd.net/5aae1079-d996-40d6-bc20-f46bfd739cd5/1200/1200/False/spinning-silver-1.jpg",
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
