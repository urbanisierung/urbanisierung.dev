import { Component, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router'
import { SIDEPROJECTS } from 'src/app/constants/sideprojects.constant'
import { SideProject } from '../../../types/SideProject.type'

@Component({
  selector: 'app-sideproject-details',
  templateUrl: './sideproject-details.component.html',
  styleUrls: ['./sideproject-details.component.scss'],
})
export class SideprojectDetailsComponent implements OnInit {
  public project: SideProject

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    const projectId = this.route.snapshot.params.projectId
    this.project = SIDEPROJECTS.find(
      (sideproject) => sideproject.id === projectId,
    )
  }
}
