export interface Job {
  title: string
  company: {
    name: string
    url: string
    logo?: string
  }
  from: string
  to: string
  duration: string
  description: string[]
  tech: string[]
}
