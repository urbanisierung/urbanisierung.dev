import { Component, OnInit } from '@angular/core'
import { BOOKS } from 'src/app/constants/books.constant'
import { OpenLibraryService } from '../../services/openlibrary.service'

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit {
  constructor(public openLibraryService: OpenLibraryService) {}

  ngOnInit() {
    this.openLibraryService.get(BOOKS)
  }
}
