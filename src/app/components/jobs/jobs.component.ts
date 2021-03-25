import { Component, OnInit } from '@angular/core'
import { JOBS } from '../../constants/jobs.constant'
import { ScreensizeService } from '../../services/screensize.service'
import { JobWithAlignment } from '../../types/Job.type'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public jobsWithAlignment: JobWithAlignment[] = []

  constructor(public screensizeService: ScreensizeService) {}

  ngOnInit(): void {
    let index = 1
    let lastJob
    let isLeft = true

    for (const job of JOBS) {
      if (!lastJob || lastJob !== job.company.name) {
        index++
      }
      if (index % 2 === 0) {
        isLeft = true
      } else {
        isLeft = false
      }
      this.jobsWithAlignment.push({ job, left: isLeft })
      lastJob = job.company.name
    }
  }
}
