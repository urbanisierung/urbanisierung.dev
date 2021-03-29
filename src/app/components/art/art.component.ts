import { Component } from '@angular/core'
import { ART } from '../../constants/art.constant'
import { ArtItem } from '../../types/ArtItem.type'

@Component({
  selector: 'app-art',
  templateUrl: './art.component.html',
  styleUrls: ['./art.component.scss'],
})
export class ArtComponent {
  public art: ArtItem[] = ART
  constructor() {}
}
