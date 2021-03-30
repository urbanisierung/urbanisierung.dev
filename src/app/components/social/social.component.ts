import { Component } from '@angular/core'
import { SOCIAL_CONNECT } from '../../constants/SocialConnects.constant'

@Component({
  selector: 'app-social',
  templateUrl: './social.component.html',
  styleUrls: ['./social.component.scss'],
})
export class SocialComponent {
  public socialConnects = SOCIAL_CONNECT

  constructor() {}
}
