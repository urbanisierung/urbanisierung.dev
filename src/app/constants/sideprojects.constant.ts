import { SideProject } from '../types/SideProject.type'
import { SocialProvider } from './SocialProvider.enum'

export const SIDEPROJECTS: SideProject[] = [
  {
    name: 'Find the next victim',
    description:
      'You are always looking for a volunteer? As the next chair for a meeting, as the next at the standup, ...? This miniapp helps you. Just publish a Google Spreadsheet with all participants and you are ready to go.',
    image: 'assets/img/projects/findthenextvictim.gif',
    urls: [
      {
        socialProvider: SocialProvider.WEBSITE,
        url: 'https://findthenextvictim.netlify.app/',
      },
    ],
    year: 2021,
    tech: ['typescript', 'angular', 'netlify'],
  },
  {
    name: 'Websiteshot',
    description:
      'Never spend time again to create awesome screenshots of your websites.',
    image: 'assets/img/projects/websiteshot.png',
    urls: [
      {
        socialProvider: SocialProvider.GITHUB,
        url: 'https://github.com/websiteshot',
      },
      {
        socialProvider: SocialProvider.WEBSITE,
        url: 'https://websiteshot.app',
      },
      {
        socialProvider: SocialProvider.DOCS,
        url: 'https://docs.websiteshot.app',
      },
    ],
    year: 2020,
    tech: [
      'typescript',
      'angular',
      'nodejs',
      'firebase',
      'serverless',
      'newrelic',
      'netlify',
      'docusaurus',
    ],
  },
  {
    name: 'Restzeebe',
    description:
      'If you want to try out Camunda Clouds Workflow Engine without implementing one line of code Restzeebe will help you. Register Service Workers, send messages or start new instances from your browser.',
    image: 'assets/img/projects/restzeebe.png',
    urls: [
      {
        socialProvider: SocialProvider.WEBSITE,
        url: 'https://restzeebe.app',
      },
    ],
    year: 2020,
    tech: [
      'typescript',
      'angular',
      'nodejs',
      'firebase',
      'serverless',
      'netlify',
      'camundacloud',
      'zeebe',
    ],
  },
  {
    name: 'Sharu',
    description:
      'Decentralized and encrypted filesharing via IPFS and permission and rights management via an Ethereum contract.',
    image: 'assets/img/projects/sharu.gif',
    urls: [
      {
        socialProvider: SocialProvider.GITHUB,
        url: 'https://github.com/sharu-io',
      },
      {
        socialProvider: SocialProvider.WEBSITE,
        url: 'https://sharu.io',
      },
    ],
    year: 2019,
    tech: [
      'solidity',
      'ethereum',
      'typescript',
      'electron',
      'angular',
      'nodejs',
    ],
  },
]
