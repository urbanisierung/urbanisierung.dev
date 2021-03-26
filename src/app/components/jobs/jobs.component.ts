import { Component, OnInit } from '@angular/core'
import { Tech } from '../../constants/tech.enum'
import { JOBS } from '../../constants/jobs.constant'
import { ScreensizeService } from '../../services/screensize.service'
import { Job, JobWithAlignment } from '../../types/Job.type'

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
})
export class JobsComponent implements OnInit {
  public jobsWithAlignment: JobWithAlignment[] = []
  public filteredJobsWithAlignment: JobWithAlignment[] = []
  public skills: Tech[] = []
  public selectedSkills: Tech[] = []

  constructor(public screensizeService: ScreensizeService) {}

  ngOnInit(): void {
    let index = 1
    let lastJob
    let isLeft = true

    const jobsWithSortedTags: Job[] = JOBS.map((job) => {
      const jobWithSortedTags = job
      jobWithSortedTags.tech = job.tech.sort((a, b) => (a > b ? 1 : -1))
      return jobWithSortedTags
    })

    for (const job of jobsWithSortedTags) {
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

    this.filteredJobsWithAlignment = this.jobsWithAlignment

    const skills: Tech[] = []
    for (const job of this.jobsWithAlignment) {
      for (const skill of job.job.tech) {
        if (!skills.includes(skill)) {
          skills.push(skill)
        }
      }

      this.skills = skills.sort((a, b) => (a > b ? 1 : -1))
    }
  }

  public changeSkills(tag: Tech) {
    if (this.selectedSkills.includes(tag)) {
      this.selectedSkills = this.selectedSkills.filter((skill) => skill !== tag)
    } else {
      this.selectedSkills.push(tag)
    }
    this.filterBySkills()
  }

  private filterBySkills() {
    if (this.selectedSkills.length > 0) {
      this.filteredJobsWithAlignment = this.jobsWithAlignment.filter((job) => {
        for (const skill of this.selectedSkills) {
          if (job.job.tech.includes(skill)) {
            return true
          }
        }
        return false
      })
    } else {
      this.filteredJobsWithAlignment = this.jobsWithAlignment
    }
  }
}
