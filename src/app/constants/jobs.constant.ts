import { Job } from '../types/Job.type'
import { Tech } from './tech.enum'

export const JOBS: Job[] = [
  {
    title: 'Software Engineer',
    company: {
      name: 'Camunda',
      url: 'https://www.camunda.com/',
      logo: 'assets/img/companies/camunda.png',
    },
    location: 'Remote',
    fromTimestamp: 1561939200000,
    from: 'Jul 2019',
    to: 'present',
    duration: '> 1 year',
    description: [
      `In a <strong>full remote team</strong>, I have been working on <a href="https://camunda.io" target="_blank">Camunda Cloud</a> since the early hours. It is a <a href="https://camunda.com/products/cloud/workflow-engine/" target="_blank">workflow engine (Zeebe) in the cloud</a>, through which BPMN processes can be executed. My responsibilities are spread <strong>all over the stack</strong>, so I am responsible for both backend and frontend systems.`,
      `As a team, we work closely with the SRE organization and product teams to build a fully comprehensive solution.`,
    ],
    tech: [
      Tech.GCP,
      Tech.TYPESCRIPT,
      Tech.JAVASCRIPT,
      Tech.ANGULAR,
      Tech.EXPRESS,
      Tech.KUBERNETES,
      Tech.NODEJS,
    ],
  },
  {
    title: 'Cloud Adviser',
    company: {
      name: 'Sick AG',
      url: 'https://www.sick.com/',
      logo: 'assets/img/companies/sick.png',
    },
    location: 'Karlsruhe',
    fromTimestamp: 1504224000000,
    from: 'Sep 2017',
    to: 'Jun 2019',
    duration: '1 year, 10 months',
    description: [
      `SICK is one of the leading companies in sensor technology. My goal was to <strong>build up a scalable DevOps organization</strong> at a new location for the development and expansion of the cloud offering. As a bridge between product management and R&D, I introduced <strong>agile and lean techniques</strong> to improve the software development process.`,
      `During my time at SICK, services like the <a href="https://apppool.cloud.sick.com/" target="_blank">AppPool</a> or the <a href="https://assethub.cloud.sick.com/" target="_blank">AssetHub</a> were created.`,
    ],
    tech: [
      Tech.AWS,
      Tech.SERVERLESS,
      Tech.TYPESCRIPT,
      Tech.JAVASCRIPT,
      Tech.ANGULAR,
      Tech.NODEJS,
      Tech.DEVOPS,
    ],
  },
  {
    title: 'Team Lead Order Management',
    company: {
      name: '1&1 IONOS',
      url: 'https://www.ionos.com/',
      logo: 'assets/img/companies/ionos.png',
    },
    location: 'Karlsruhe',
    fromTimestamp: 1414800000000,
    from: 'Nov 2014',
    to: 'Aug 2017',
    duration: '2 years, 10 months',
    description: [
      `One of my first actions in my new role was to <strong>unify the development and operations teams</strong>. In this DevOps organization, I had the <strong>plan-build-run responsibility</strong> of the order management platform. In addition to the day-to-day business of constantly developing the platform and implementing requirements from the various product lines, several legacy systems had to be migrated to the new platform.`,
    ],
    tech: [Tech.DEVOPS, Tech.LEADERSHIP],
  },
  {
    title: 'Software Engineer',
    company: {
      name: '1&1 IONOS',
      url: 'https://www.ionos.com/',
      logo: 'assets/img/companies/ionos.png',
    },
    location: 'Karlsruhe',
    fromTimestamp: 1312156800000,
    from: 'Aug 2011',
    to: 'Oct 2014',
    duration: '3 years, 3 months',
    description: [
      `I was one of the first developers of a new team to build the new order management platform for IONOS. The first phase was characterized by the <strong>implementation of the platform based on BPMN processes</strong>, close collaboration with the business support systems teams and the business department with whom I discussed and coordinated requirements and improvements.`,
      `After the launch of the first process I became <strong>lead developer</strong> for the rollout of the remaining international order processes.`,
    ],
    tech: [
      Tech.JAVA,
      Tech.MAVEN,
      Tech.SVN,
      Tech.BPMN,
      Tech.CAMUNDA,
      Tech.GIT,
      Tech.JBOSS,
    ],
  },
  {
    title: 'Research Associate',
    company: {
      name: 'FZI',
      url: 'https://www.fzi.de/en/home/',
      logo: 'assets/img/companies/fzi.png',
    },
    location: 'Karlsruhe',
    fromTimestamp: 1293840000000,
    from: 'Jan 2011',
    to: 'Jul 2011',
    duration: '7 months',
    description: [
      `At the FZI, I already wrote my diploma thesis in the field of healthcare and aimed for a <strong>PhD</strong> in the context of <a href="https://www.aal-europe.eu/" target="_blank">Ambient Assisted Living</a>. During this time, I was able to work with other <strong>European research institutions</strong> on projects like <a href="https://www.universaal.info/" target="_blank">universAAL</a>.`,
      `However, I had to realize that I am not made for research ;)`,
    ],
    tech: [Tech.JAVA, Tech.MAVEN, Tech.SVN],
  },
  {
    title: 'Software Engineer and Consultant',
    company: {
      name: 'Camos',
      url: 'https://www.camos.de/en/',
      logo: 'assets/img/companies/camos.png',
    },
    location: 'Stuttgart',
    fromTimestamp: 1241136000000,
    from: 'May 2009',
    to: 'Dec 2010',
    duration: '1 year, 8 months',
    description: [
      `Camos was my first full-time job after graduation. I enjoyed the <strong>mix of software development and customer consulting</strong> and gained experience in working with customers. I was responsible for the first introduction of the core product to customers, training of customers with the development kit and first customizations of the core product to customers' requirements.`,
    ],
    tech: [Tech.CAMOS_CPQ],
  },
  {
    title: 'Computer Science',
    company: {
      name: 'Karlsruhe Institute of Technology',
      url: 'https://www.kit.edu/english/',
      logo: 'assets/img/companies/kit.png',
    },
    location: 'Karlsruhe',
    fromTimestamp: 1064966400000,
    from: 'Oct 2003',
    to: 'Apr 2009',
    duration: '5 years, 7 months',
    description: [
      `When I was 10 years old, I programmed with Turbo Pascal for the first time. Actually, I knew since then that this is what I want to do in the future. And so I studied computer science at KIT and got my diploma (comparable to a <strong>Master of Science</strong>). In the main study I deepened in the subjects <strong>information systems</strong> and <strong>telematics</strong> and wrote my diploma thesis in <strong>health care</strong>.`,
    ],
    tech: [
      Tech.JAVA,
      Tech.PROLOG,
      Tech.HASKELL,
      Tech.INFORMATION_SYSTEMS,
      Tech.TELEMATICS,
      Tech.TUTOR,
    ],
  },
]

export const DUMMY_JOB: Job = {
  title: 'DUMMY',
  company: {
    name: '',
    url: '',
  },
  location: '',
  fromTimestamp: 0,
  from: '',
  to: '',
  duration: '',
  description: [],
  tech: [],
}
