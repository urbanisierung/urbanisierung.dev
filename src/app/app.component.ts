import { Component, HostListener } from '@angular/core'
import { Router } from '@angular/router'
import { TranslateService } from '@ngx-translate/core'
import { ScreensizeService } from './services/screensize.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    private translate: TranslateService,
    public screensizeService: ScreensizeService,
    public router: Router,
  ) {
    this.translate.setDefaultLang('en')
  }

  @HostListener('window:resize', ['$event'])
  onResize(_event) {
    this.screensizeService.update(window.innerWidth)
  }
}
