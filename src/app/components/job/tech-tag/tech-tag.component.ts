import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Tech } from '../../../constants/tech.enum'

@Component({
  selector: 'app-tech-tag',
  templateUrl: './tech-tag.component.html',
  styleUrls: ['./tech-tag.component.scss'],
})
export class TechTagComponent {
  @Input()
  tag: Tech

  @Input()
  selection: boolean = false

  selected: boolean = false
  over: boolean = false

  @Output() select: EventEmitter<Tech> = new EventEmitter()

  constructor() {}

  public toggleSelection() {
    this.selected = !this.selected
    this.select.emit(this.tag)
  }

  public getUrl() {
    switch (this.tag) {
      case Tech.ANGULAR:
        return `https://angular.io/`
      case Tech.AWS:
        return `https://aws.amazon.com/`
      case Tech.BPMN:
        return `https://en.wikipedia.org/wiki/Business_Process_Model_and_Notation`
      case Tech.CAMOS_CPQ:
        return `https://www.camos.de/en/cpq-solution/camos-cpq`
      case Tech.CAMUNDA:
        return `https://camunda.com/`
      case Tech.CLOUDFLARE:
        return `https://www.cloudflare.com/`
      case Tech.DEVOPS:
        return `https://en.wikipedia.org/wiki/DevOps`
      case Tech.DOCUSAURUS:
        return `https://docusaurus.io/`
      case Tech.EXPRESS:
        return `https://expressjs.com/`
      case Tech.FIREBASE:
        return `https://firebase.google.com/`
      case Tech.GCP:
        return `https://cloud.google.com/`
      case Tech.GIT:
        return `https://git-scm.com/`
      case Tech.HASKELL:
        return `https://www.haskell.org/`
      case Tech.INFORMATION_SYSTEMS:
        return `https://en.wikipedia.org/wiki/Information_system`
      case Tech.JAVA:
        return `https://www.java.com/`
      case Tech.JAVASCRIPT:
        return `https://www.javascript.com/`
      case Tech.JBOSS:
        return `https://www.jboss.org/`
      case Tech.KUBERNETES:
        return `https://kubernetes.io/`
      case Tech.LEADERSHIP:
        return `https://en.wikipedia.org/wiki/Leadership`
      case Tech.MAVEN:
        return `https://maven.apache.org/`
      case Tech.NETLIFY:
        return `https://www.netlify.com/`
      case Tech.NEWRELIC:
        return `https://newrelic.com/`
      case Tech.NODEJS:
        return `https://nodejs.org/`
      case Tech.PROLOG:
        return `https://en.wikipedia.org/wiki/Prolog`
      case Tech.SERVERLESS:
        return `https://en.wikipedia.org/wiki/Serverless_computing`
      case Tech.SOLIDITY:
        return `https://docs.soliditylang.org/`
      case Tech.ELECTRON:
        return `https://www.electronjs.org/`
      case Tech.ETHETERUM:
        return `https://ethereum.org/`
      case Tech.STRIPE:
        return `https://stripe.com/`
      case Tech.SVN:
        return `https://subversion.apache.org/`
      case Tech.TELEMATICS:
        return `https://en.wikipedia.org/wiki/Telematics`
      case Tech.TUTOR:
        return `https://en.wikipedia.org/wiki/Tutoring`
      case Tech.TYPESCRIPT:
        return `https://www.typescriptlang.org/`
      default:
        return undefined
    }
  }
}
