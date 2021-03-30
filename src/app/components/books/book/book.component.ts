import { Component, Input } from '@angular/core'
import { BookDetails } from 'src/app/types/OpenLibrary.type'

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.scss'],
})
export class BookComponent {
  @Input()
  book: BookDetails

  constructor() {}
}
