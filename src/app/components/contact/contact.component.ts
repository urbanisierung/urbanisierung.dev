import { Component } from '@angular/core'
import { SocialProvider } from 'src/app/constants/SocialProvider.enum'
import { SocialConnect } from 'src/app/types/SocialConnect.type'

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  public email: SocialConnect = {
    socialProvider: SocialProvider.EMAIL,
    url: 'mailto:adam.urban@gmail.com',
  }

  constructor() {}
}
