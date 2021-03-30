import { Component, Input } from '@angular/core'
import { Job } from '../../../types/Job.type'

@Component({
  selector: 'app-job-description',
  templateUrl: './job-description.component.html',
  styleUrls: ['./job-description.component.scss'],
})
export class JobDescriptionComponent {
  @Input()
  job: Job

  @Input()
  left: boolean

  constructor() {}
}
