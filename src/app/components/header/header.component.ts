import { Component } from '@angular/core'
import { HEADER_ITEMS } from '../../constants/header.constant'
import { SOCIAL_CONNECT } from '../../constants/SocialConnects.constant'
import { HeaderItem } from '../../types/HeaderItem.type'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public items: HeaderItem[] = HEADER_ITEMS
  public socialConnects = SOCIAL_CONNECT

  opened: boolean = false

  constructor() {}

  toggleMenu() {
    this.opened = !this.opened
  }
}
