import { SocialConnect } from '../types/SocialConnect.type'
import { SocialProvider } from './SocialProvider.enum'

export const SOCIAL_CONNECT: SocialConnect[] = [
  {
    socialProvider: SocialProvider.TWITTER,
    url: 'https://twitter.com/urbanisierung',
  },
  {
    socialProvider: SocialProvider.LINKEDIN,
    url: 'https://www.linkedin.com/in/adamurban/',
  },
  {
    socialProvider: SocialProvider.GITHUB,
    url: 'https://github.com/urbanisierung',
  },
  {
    socialProvider: SocialProvider.EMAIL,
    url: 'mailto:adam.urban@gmail.com',
  },
]
