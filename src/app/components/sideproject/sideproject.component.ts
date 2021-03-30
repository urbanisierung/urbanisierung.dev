import { Component, Input } from '@angular/core'
import { Router } from '@angular/router'
import { Route } from '../../constants/route.enum'
import { SideProject } from '../../types/SideProject.type'

@Component({
  selector: 'app-sideproject',
  templateUrl: './sideproject.component.html',
  styleUrls: ['./sideproject.component.scss'],
})
export class SideprojectComponent {
  @Input()
  sideproject: SideProject

  constructor(private router: Router) {}

  public getBgImage() {
    return `url('${this.sideproject.image}')`
  }

  public jump() {
    this.router.navigate([Route.SIDEPROJECTS, this.sideproject.id])
  }
}
