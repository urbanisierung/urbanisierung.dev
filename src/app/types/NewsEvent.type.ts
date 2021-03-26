import { Route } from '../constants/route.enum'

export interface NewsEvent {
  timestamp: number
  title: string
  url: string
  route: Route
}
