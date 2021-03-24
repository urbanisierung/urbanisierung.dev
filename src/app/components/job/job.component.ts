import { Component, Input } from '@angular/core'
import { Job } from '../../types/Job.type'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent {
  @Input()
  job: Job

  constructor() {}
}
