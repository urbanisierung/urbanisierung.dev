import { SocialProvider } from '../constants/SocialProvider.enum'

export interface SocialConnect {
  socialProvider: SocialProvider
  url: string
}
