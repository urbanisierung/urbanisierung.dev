import { Component, HostListener } from '@angular/core'
import { Router } from '@angular/router'
import { ScreensizeService } from './services/screensize.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(
    public screensizeService: ScreensizeService,
    public router: Router,
  ) {}

  @HostListener('window:resize', ['$event'])
  onResize(_event) {
    this.screensizeService.update(window.innerWidth)
  }
}
