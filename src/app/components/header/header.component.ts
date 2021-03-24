import { Component } from '@angular/core'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  public items = [
    {
      name: 'Experience',
      route: 'experience',
    },
    {
      name: 'Bla bla...',
      route: 'blog',
    },
  ]

  constructor() {}
}
