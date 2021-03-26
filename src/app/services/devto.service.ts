import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { DEV_TO_ARTICLES } from '../constants/url.constant'
import { DevToArticle } from '../types/DevToArticle.type'

@Injectable({
  providedIn: 'root',
})
export class DevToService {
  private articles: DevToArticle[] = []
  private loaded: boolean = false

  constructor(private http: HttpClient) {}

  public get(): Observable<DevToArticle[]> {
    return new Observable<DevToArticle[]>((observer) => {
      if (!this.loaded) {
        this.http.get<DevToArticle[]>(DEV_TO_ARTICLES).subscribe((articles) => {
          this.articles = articles
          observer.next(this.articles)
        })
      } else {
        this.loaded = true
        observer.next(this.articles)
      }
    })
  }
}
