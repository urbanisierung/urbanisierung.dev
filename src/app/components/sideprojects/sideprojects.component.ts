import { Component } from '@angular/core'
import { SIDEPROJECTS } from '../../constants/sideprojects.constant'

@Component({
  selector: 'app-sideprojects',
  templateUrl: './sideprojects.component.html',
  styleUrls: ['./sideprojects.component.scss'],
})
export class SideprojectsComponent {
  sideprojects = SIDEPROJECTS

  constructor() {}
}
