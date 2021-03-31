import { Component } from '@angular/core'
import { Router } from '@angular/router'
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

  constructor(private router: Router) {}

  toggleMenu() {
    this.opened = !this.opened
  }

  closeMenu() {
    this.opened = false
  }

  navigate(item: HeaderItem) {
    this.router.navigate([item.route])
    this.opened = false
  }
}
