import { Component, OnInit } from '@angular/core'
import { RESUME_PDF } from '../../constants/resume.constant'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  constructor() {}

  // eslint-disable-next-line class-methods-use-this
  ngOnInit() {
    window.location.href = RESUME_PDF
  }
}
