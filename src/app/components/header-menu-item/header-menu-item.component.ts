import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-header-menu-item',
  templateUrl: './header-menu-item.component.html',
  styleUrls: ['./header-menu-item.component.scss'],
})
export class HeaderMenuItemComponent {
  @Input()
  public name: string

  @Input()
  public route: string

  constructor() {}
}
