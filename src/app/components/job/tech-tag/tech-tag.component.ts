import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-tech-tag',
  templateUrl: './tech-tag.component.html',
  styleUrls: ['./tech-tag.component.scss'],
})
export class TechTagComponent {
  @Input()
  tag: string

  constructor() {}
}
