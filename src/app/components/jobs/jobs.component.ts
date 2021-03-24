import { Component, OnInit } from '@angular/core'
import { ScreensizeService } from '../../services/screensize.service'
import { DUMMY_JOB, JOBS } from '../../constants/jobs.constant'
import { Job } from '../../types/Job.type'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public jobs: Job[][] = []

  constructor(public screensizeService: ScreensizeService) {}

  ngOnInit(): void {
    let index = 1
    let lastJob

    for (const job of JOBS) {
      if (!lastJob || lastJob !== job.company.name) {
        index++
      }
      if (index % 2 === 0) {
        this.jobs.push([job, DUMMY_JOB])
      } else {
        this.jobs.push([DUMMY_JOB, job])
      }
      lastJob = job.company.name
    }
  }

  // eslint-disable-next-line class-methods-use-this
  isDummy(job: Job) {
    return job.title === DUMMY_JOB.title
  }
}
