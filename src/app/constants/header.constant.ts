import { HeaderItem } from '../types/HeaderItem.type'
import { Route } from './route.enum'

export const HEADER_ITEMS: HeaderItem[] = [
  {
    name: 'Hello!',
    route: Route.HOME,
  },
  {
    name: 'Work',
    route: Route.EXPERIENCE,
  },
  {
    name: 'Posts',
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
