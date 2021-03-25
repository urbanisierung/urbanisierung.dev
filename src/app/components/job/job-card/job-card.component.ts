import { Component, Input } from '@angular/core'
import { ScreensizeService } from '../../../services/screensize.service'
import { Job } from '../../../types/Job.type'

@Component({
  selector: 'app-job-card',
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss'],
})
export class JobCardComponent {
  @Input()
  job: Job

  constructor(public screensizeService: ScreensizeService) {}
}
