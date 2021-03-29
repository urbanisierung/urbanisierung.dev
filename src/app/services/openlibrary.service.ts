import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { OPEN_LIBRARY, OPEN_LIBRARY_COVERS } from '../constants/url.constant'
import { MyBook, ReadingStatus } from '../types/MyBook.type'
import {
  Author,
  Book,
  BookDetails,
  OpenLibraryRoute,
} from '../types/OpenLibrary.type'

@Injectable({
  providedIn: 'root',
})
export class OpenLibraryService {
  public books: BookDetails[] = []
  public readBooks: BookDetails[] = []
  public readingBooks: BookDetails[] = []

  constructor(private http: HttpClient) {}

  public get(myBooks: MyBook[]) {
    if (this.books.length > 0) {
      return
    }
    myBooks.forEach((myBook) => {
      this.http
        .get<Book>(
          `${OPEN_LIBRARY}/${OpenLibraryRoute.BOOKS}/${myBook.id}.json`,
        )
        .subscribe(async (book) => {
          let authors = []
          if (book.authors && book.authors.length > 0) {
            const authorPromises = book.authors.map((author) =>
              this.http
                .get<Author>(`${OPEN_LIBRARY}${author.key}.json`)
                .toPromise(),
            )
            authors = await Promise.all(authorPromises)
          }
          const bookDetails: BookDetails = {
            title: book.title,
            subtitle: book.subtitle,
            authors: authors.map((author) => author.name),
            cover: `${OPEN_LIBRARY_COVERS}/${book.covers[0]}.jpg`,
            url: `${OPEN_LIBRARY}/${OpenLibraryRoute.BOOKS}/${myBook.id}`,
            id: myBook.id,
            startedTs: myBook.startedTs,
            status: myBook.status,
            endTs: myBook.endTs,
          }
          this.books.push(bookDetails)
          if (bookDetails.status === ReadingStatus.READING) {
            this.readingBooks.push(bookDetails)
          }
          if (bookDetails.status === ReadingStatus.READ) {
            this.readBooks.push(bookDetails)
            this.readingBooks.sort((a, b) => b.endTs - a.endTs)
          }
        })
    })
  }
}
