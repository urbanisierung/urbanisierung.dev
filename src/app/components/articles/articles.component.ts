import { Component, OnInit } from '@angular/core'
import { DevToArticle } from '../../types/DevToArticle.type'
import { DevToService } from '../../services/devto.service'

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss'],
})
export class ArticlesComponent implements OnInit {
  public articles: DevToArticle[][] = []

  constructor(private devToService: DevToService) {}

  ngOnInit(): void {
    this.devToService.get().subscribe((articles) => {
      let index = 0
      let currentArticles: DevToArticle[] = []
      for (const article of articles) {
        if (index % 3 === 0) {
          this.articles.push(currentArticles)
          currentArticles = []
        }
        currentArticles.push(article)
        index++
      }
      if (currentArticles.length > 0) {
        this.articles.push(currentArticles)
      }
    })
  }
}
