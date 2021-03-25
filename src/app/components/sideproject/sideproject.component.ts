import { Component, Input } from '@angular/core'
import { SideProject } from '../../types/SideProject.type'

@Component({
  selector: 'app-sideproject',
  templateUrl: './sideproject.component.html',
  styleUrls: ['./sideproject.component.scss'],
})
export class SideprojectComponent {
  @Input()
  sideproject: SideProject

  constructor() {}
}
