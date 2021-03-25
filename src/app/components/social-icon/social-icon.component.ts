import { Component, Input } from '@angular/core'
import {
  faGithubSquare,
  faLinkedin,
  faTwitterSquare,
} from '@fortawesome/free-brands-svg-icons'
import {
  faEnvelopeSquare,
  faExternalLinkSquareAlt,
  faStickyNote,
} from '@fortawesome/free-solid-svg-icons'
import { SocialProvider } from 'src/app/constants/SocialProvider.enum'
import { SocialConnect } from 'src/app/types/SocialConnect.type'

@Component({
  selector: 'app-social-icon',
  templateUrl: './social-icon.component.html',
  styleUrls: ['./social-icon.component.scss'],
})
export class SocialIconComponent {
  @Input()
  socialConnect: SocialConnect

  constructor() {}

  public getIcon() {
    switch (this.socialConnect.socialProvider) {
      case SocialProvider.TWITTER:
        return faTwitterSquare
      case SocialProvider.LINKEDIN:
        return faLinkedin
      case SocialProvider.GITHUB:
        return faGithubSquare
      case SocialProvider.EMAIL:
        return faEnvelopeSquare
      case SocialProvider.WEBSITE:
        return faExternalLinkSquareAlt
      case SocialProvider.DOCS:
        return faStickyNote
    }
  }
}
