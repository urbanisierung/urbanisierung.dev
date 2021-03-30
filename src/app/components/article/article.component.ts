import { Component, Input } from '@angular/core'
import { DevToArticle } from '../../types/DevToArticle.type'

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent {
  @Input()
  public article: DevToArticle

  constructor() {}

  public open() {
    window.open(this.article.url)
  }
}
