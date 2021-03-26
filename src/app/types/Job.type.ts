import { Tech } from '../constants/tech.enum'

export interface Job {
  title: string
  company: {
    name: string
    url: string
    logo?: string
  }
  location: string
  fromTimestamp: number
  from: string
  to: string
  duration: string
  description: string[]
  tech: Tech[]
}

export interface JobWithAlignment {
  job: Job
  left: boolean
}
