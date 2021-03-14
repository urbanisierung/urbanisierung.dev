import { Component, Input, OnInit } from '@angular/core';
import { DevToArticle } from '../../types/DevToArticle.type';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {
  @Input()
  public article: DevToArticle

  constructor() { }

  ngOnInit(): void {
  }

}
