import { MyBook } from './MyBook.type'

export interface Book {
  publishers: string[]
  subtitle: string
  covers: number[]
  authors: Array<{ key: string }>
  title: string
}

export interface Author {
  name: string
  key: string
  id: number
}

export interface BookDetails extends MyBook {
  title: string
  subtitle: string
  authors: string[]
  cover: string
  url: string
}

export enum OpenLibraryRoute {
  BOOKS = 'books',
  AUTHORS = 'authors',
}
