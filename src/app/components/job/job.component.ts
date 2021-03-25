import { Component, Input } from '@angular/core'
import { ScreensizeService } from '../../services/screensize.service'
import { JobWithAlignment } from '../../types/Job.type'

@Component({
  selector: 'app-job',
  templateUrl: './job.component.html',
  styleUrls: ['./job.component.scss'],
})
export class JobComponent {
  @Input()
  jobWithAlignment: JobWithAlignment

  constructor(public screensizeService: ScreensizeService) {}
}
