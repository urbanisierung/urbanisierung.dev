import { Component, Input } from '@angular/core'
import {
  faBuilding,
  faMicrophone,
  faPlay,
  faRssSquare,
} from '@fortawesome/free-solid-svg-icons'
import { Route } from '../../../constants/route.enum'
import { ScreensizeService } from '../../../services/screensize.service'
import { NewsEvent } from '../../../types/NewsEvent.type'

@Component({
  selector: 'app-news-item',
  templateUrl: './news-item.component.html',
  styleUrls: ['./news-item.component.scss'],
})
export class NewsItemComponent {
  @Input()
  public newsevent: NewsEvent

  constructor(public screensizeService: ScreensizeService) {}

  public getIcon() {
    switch (this.newsevent.route) {
      case Route.EXPERIENCE:
        return faBuilding
      case Route.BLOG:
        return faRssSquare
      case Route.CONFERENCE_TALKS:
        return faMicrophone
      case Route.SIDEPROJECTS:
        return faPlay
    }
  }
}
