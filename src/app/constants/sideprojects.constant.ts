import { SideProject } from '../types/SideProject.type'
import { SocialProvider } from './SocialProvider.enum'
import { Tech } from './tech.enum'

export const SIDEPROJECTS: SideProject[] = [
  {
    id: 'find-the-next-victom',
    name: 'Find the next victim',
    description:
      'You are always looking for a volunteer? As the next chair for a meeting, as the next at the standup, ...? This miniapp helps you. Just publish a Google Spreadsheet with all participants and you are ready to go.',
    image: 'assets/img/projects/findthenextvictim.webp',
    urls: [
      {
        socialProvider: SocialProvider.WEBSITE,
        url: 'https://findthenextvictim.netlify.app/',
      },
    ],
    startTimestamp: 1615420800000,
    year: 2021,
    tech: [Tech.TYPESCRIPT, Tech.ANGULAR, Tech.NETLIFY],
    featured: false,
  },
  {
    id: 'websiteshot',
    name: 'Websiteshot',
    description:
      'Never spend time again to create awesome screenshots of your websites.',
    image: 'assets/img/projects/websiteshot.webp',
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
    startTimestamp: 1601856000000,
    year: 2020,
    tech: [
      Tech.TYPESCRIPT,
      Tech.ANGULAR,
      Tech.NODEJS,
      Tech.EXPRESS,
      Tech.FIREBASE,
      Tech.GATSBY,
      Tech.SERVERLESS,
      Tech.NEWRELIC,
      Tech.NETLIFY,
      Tech.DOCUSAURUS,
      Tech.STRIPE,
    ],
    featured: true,
  },
  {
    id: 'restzeebe',
    name: 'Restzeebe',
    description:
      'If you want to try out Camunda Clouds Workflow Engine without implementing one line of code Restzeebe will help you. Register Service Workers, send messages or start new instances from your browser.',
    image: 'assets/img/projects/restzeebe.webp',
    urls: [
      {
        socialProvider: SocialProvider.WEBSITE,
        url: 'https://restzeebe.app',
      },
    ],
    startTimestamp: 1604275200000,
    year: 2020,
    tech: [
      Tech.TYPESCRIPT,
      Tech.ANGULAR,
      Tech.NODEJS,
      Tech.EXPRESS,
      Tech.FIREBASE,
      Tech.SERVERLESS,
      Tech.CAMUNDA,
      Tech.NETLIFY,
      Tech.DOCUSAURUS,
    ],
    featured: true,
  },
  {
    id: 'sharu',
    name: 'Sharu',
    description:
      'Decentralized and encrypted filesharing via IPFS and permission and rights management via an Ethereum contract.',
    image: 'assets/img/projects/sharu.webp',
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
    startTimestamp: 1549411200000,
    year: 2019,
    tech: [
      Tech.SOLIDITY,
      Tech.ETHETERUM,
      Tech.TYPESCRIPT,
      Tech.ELECTRON,
      Tech.ANGULAR,
      Tech.NODEJS,
    ],
    featured: true,
  },
  {
    id: 'generative-arts',
    name: 'Generative Arts',
    description:
      'This is a Github project I started with a colleague. We want to try out different techniques in Generative Art. We are also creating assets that we will use for a conference talk to generate art from a BPMN process using a BPMN process.',
    image: 'assets/img/projects/generativeart.webp',
    urls: [
      {
        socialProvider: SocialProvider.GITHUB,
        url: 'https://github.com/generative-arts',
      },
    ],
    startTimestamp: 1610236800000,
    year: 2021,
    tech: [
      Tech.TYPESCRIPT,
      Tech.ANGULAR,
      Tech.NETLIFY,
      Tech.FIREBASE,
      Tech.NODEJS,
      Tech.CANVAS,
      Tech.CAMUNDA,
    ],
    featured: false,
  },
  {
    id: 'zeebetron',
    name: 'Zeebetron',
    description:
      'A small Electron app that allows you to easily manage different Zeebe profiles. This makes it quite easy to communicate between different Zeebe brokers.',
    image: 'assets/img/projects/zeebetron.webp',
    urls: [
      {
        socialProvider: SocialProvider.GITHUB,
        url: 'https://github.com/urbanisierung/zeebetron',
      },
    ],
    startTimestamp: new Date('2020-01-07').getTime(),
    year: 2020,
    tech: [Tech.TYPESCRIPT, Tech.ANGULAR, Tech.ELECTRON, Tech.CAMUNDA],
    featured: false,
  },
  {
    id: 'dot-calendar',
    name: 'Dot Calendar',
    description: `When I first saw a Dot calendar I was super taken with the concept. However, I wanted to customize the calendar to my needs, like using my own colors, storing already known dates, etc. Since I didn't find a service that does everything, I wrote my own little tool. It creates a calendar for a certain year, with a defined color set and with my calendar entries. I have the result produced in a print shop and I am very happy with it.`,
    image: 'assets/img/projects/dotcalendar.webp',
    urls: [
      {
        socialProvider: SocialProvider.GITHUB,
        url: 'https://github.com/urbanisierung/dot-calendar',
      },
    ],
    startTimestamp: new Date('2019-12-06').getTime(),
    year: 2019,
    tech: [Tech.TYPESCRIPT, Tech.NODEJS, Tech.CANVAS],
    featured: false,
  },
  {
    id: 'fcheat',
    name: 'fcheat',
    description: `fcheat is for all who cannot remember all the commands ;) It is a CLI that can be extended with your own commands. It helps you to find your commands quickly.`,
    image: 'assets/img/projects/fcheat.webp',
    urls: [
      {
        socialProvider: SocialProvider.GITHUB,
        url: 'https://github.com/urbanisierung/fcheat',
      },
    ],
    startTimestamp: new Date('2019-12-20').getTime(),
    year: 2019,
    tech: [Tech.TYPESCRIPT, Tech.NODEJS],
    featured: false,
  },
]
