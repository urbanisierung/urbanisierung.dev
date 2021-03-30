import { Tech } from '../constants/tech.enum'
import { SocialConnect } from './SocialConnect.type'

export interface SideProject {
  id: string
  name: string
  image: string
  description: string
  year: number
  startTimestamp: number
  tech: Tech[]
  urls: SocialConnect[]
  featured: boolean
}
