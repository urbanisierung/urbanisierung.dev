import { Job } from '../types/Job.type'

export const JOBS: Job[] = [
  {
    title: 'Software Engineer',
    company: {
      name: 'Camunda',
      url: 'https://www.camunda.com/',
    },
    from: 'Jul 2019',
    to: 'present',
    duration: '> 1 year',
    description: [
      'Implementing Camunda Cloud',
      'Fullstack Engineering of Backend and Frontend',
    ],
    tech: ['GCP', 'Typescript', 'Angular', 'Express', 'Kubernetes', 'NodeJS'],
  },
  {
    title: 'Cloud Adviser',
    company: {
      name: 'Sick AG',
      url: 'https://www.sick.com/',
    },
    from: 'Sep 2017',
    to: 'Jun 2019',
    duration: '1 year, 10 months',
    description: [
      'Building up a scalable DevOps organization',
      'Introduction of an agile and lean approach',
      'Bridge between product management and R&D',
      'Company-wide consulting',
    ],
    tech: ['AWS', 'Serverless', 'Typescript', 'Angular'],
  },
  {
    title: 'Team Lead Order Management',
    company: {
      name: '1&1 IONOS',
      url: 'https://www.ionos.com/',
    },
    from: 'Nov 2014',
    to: 'Aug 2017',
    duration: '2 years, 10 months',
    description: [
      'Plan-build-run responsibility for the order management platform of the hosting segment',
      'Introduction of a DevOps environment with 12 developers and operators',
      'Coaching of employees and new team leads',
      'Responsibility for the business domains contract, customer, product and order',
      'Consulting of product management with regard to new product requirements and integrations',
    ],
    tech: ['DevOps'],
  },
  {
    title: 'Software Engineer',
    company: {
      name: '1&1 IONOS',
      url: 'https://www.ionos.com/',
    },
    from: 'Aug 2011',
    to: 'Oct 2014',
    duration: '3 years, 3 months',
    description: [
      'Building executable business processes with jBPM/JBoss',
      'Lead developer for the new business process platform and responsible to launch the first use cases internationally',
      'Close collaboration with ops team to create a common product identification and responsibility',
    ],
    tech: ['Java', 'Maven', 'SVN', 'BPMN', 'Camunda', 'Git', 'JBoss'],
  },
  {
    title: 'Research Associate',
    company: {
      name: 'FZI',
      url: 'https://www.fzi.de/en/home/',
    },
    from: 'Jan 2011',
    to: 'Jul 2011',
    duration: '7 months',
    description: [
      'Planned PhD thesis in context of Ambient Assisted Living',
      'Collaboration in the European research project universAAL',
    ],
    tech: ['Java', 'Maven', 'SVN'],
  },
  {
    title: 'Software Engineer and Consultant',
    company: {
      name: 'Camos',
      url: 'https://www.camos.de/en/',
    },
    from: 'May 2009',
    to: 'Dec 2010',
    duration: '1 year, 8 months',
    description: [
      'Technical consulting about customizations',
      'Building PoCs and customizing CAMOS core products to fit customers needs',
    ],
    tech: ['camos CPQ'],
  },
]

export const DUMMY_JOB: Job = {
  title: 'DUMMY',
  company: {
    name: '',
    url: '',
  },
  from: '',
  to: '',
  duration: '',
  description: [],
  tech: [],
}
