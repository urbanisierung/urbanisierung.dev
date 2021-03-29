import { HeaderItem } from '../types/HeaderItem.type'
import { Route } from './route.enum'

export const HEADER_ITEMS: HeaderItem[] = [
  {
    name: 'About',
    route: Route.ABOUT,
  },
  {
    name: 'Work',
    route: Route.EXPERIENCE,
  },
  {
    name: 'Articles',
    route: Route.BLOG,
  },
  {
    name: 'Projects',
    route: Route.SIDEPROJECTS,
  },
  {
    name: 'Uses',
    route: Route.USES,
  },
]
