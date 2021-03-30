import { Component, Input } from '@angular/core'
import { ArtItem } from '../../../types/ArtItem.type'

@Component({
  selector: 'app-art-item',
  templateUrl: './art-item.component.html',
  styleUrls: ['./art-item.component.scss'],
})
export class ArtItemComponent {
  @Input()
  item: ArtItem

  constructor() {}
}
