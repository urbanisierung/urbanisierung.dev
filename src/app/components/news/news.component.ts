import { Component } from '@angular/core'
import { NewsEventService } from '../../services/newsevent.service'

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent {
  constructor(public newsEventService: NewsEventService) {}
}
