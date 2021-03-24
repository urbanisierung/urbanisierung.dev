import { Injectable } from '@angular/core'

const SMALL_SCREEN = 600
const MEDIUM_SCREEN = 900

@Injectable({
  providedIn: 'root',
})
export class ScreensizeService {
  public isSmallWidth: boolean = false
  public isMediumWidth: boolean = false

  constructor() {
    this.update(window.innerWidth)
  }

  public update(width: number) {
    this.isSmallWidth = width < SMALL_SCREEN
    this.isMediumWidth = width < MEDIUM_SCREEN
  }
}
