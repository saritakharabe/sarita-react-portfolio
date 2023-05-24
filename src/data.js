//  icons
import { FiLinkedin, FiGithub } from "react-icons/fi";

// skills images
import HTML from "./assets/image/skills/html.png";
import CSS from "./assets/image/skills/css.png";
import JavaScript from "./assets/image/skills/javascript.png";
import Angular from "./assets/image/skills/angular.png";
import Sql from "./assets/image/skills/sql.png";
import Mongo from "./assets/image/skills/mongo.png";
import Reactjs from "./assets/image/skills/react.png";
import Nodejs from "./assets/image/skills/node.png";

//project image
import CollegeHacks from './assets/image/projects/College-life-hacks-2020.jpg'
import NationalPark from './assets/image/projects/national-parks.webp'
import SvgLogo from './assets/image/projects/svglogo.jpeg'
import SocialNetwork from './assets/image/projects/socialNetwork.png'
import EmployeeTracker from './assets/image/projects/employeeTracker.png'
import PasswordGenerator from './assets/image/projects/pwd-generator.jpeg'

//Skills
export const techSkills = [
  {
    name: HTML,
  },
  {
    name: CSS,
  },
  {
    name: JavaScript,
  },
  {
    name: Angular,
  },
  {
    name: Reactjs,
  },
  {
    name: Sql,
  },
  {
    name: Nodejs,
  },
  {
    name: Mongo,
  },
];

// social
export const social = [
  {
    icon: <FiLinkedin />,
    href: "https://www.linkedin.com/in/sarita-kharabe-897104149/",
  },
  {
    icon: <FiGithub />,
    href: "https://github.com/saritakharabe",
  },
];

export const projects = [
  {
    id: 1,
    title: "National Park locator",
    subtitle: "Javascript & RestAPI",
    description: " We are here to help you plan your next outdoor getaway",
    image: NationalPark,
    githubLink: 'https://github.com/saritakharabe/p1-national-parks-locator',
    deployedLink: "https://saritakharabe.github.io/p1-national-parks-locator/",
  },
  {
    id: 2,
    title: "Nexus App",
    subtitle: "Full-Stack App",
    description:
      "Nexus is a Full-Stack application allows users to sign up & create an account",
    image: CollegeHacks,
    githubLink:'https://github.com/saritakharabe/nexus-app',
    deployedLink: "https://stark-castle-24891.herokuapp.com/",
  },
  {
    id: 3,
    title: "SVG Logo Generator",
    subtitle: "Javascript ",
    description: "This project is used to build logo for application.",
    image: SvgLogo,
    githubLink: "https://github.com/saritakharabe/OOP-SVG-logo-maker",
  },
  {
    id: 4,
    title: "Social network APi",
    subtitle: "ExpressJs, Javascript & MongoDb",
    description: "Backend application.",
    image: SocialNetwork,
    githubLink: "https://github.com/saritakharabe/Social-network-API",
  },
  {
    id: 5,
    title: "Employee Tracker",
    subtitle: "NodeJs & Mysql",
    description: "Backend application.",
    image: EmployeeTracker,
    githubLink: "https://github.com/saritakharabe/Employee-Tracker",
  },
  {
    id: 6,
    title: "Password Generator",
    subtitle: "Javascript, HTML and CSS",
    description: "Front End Application",
    image: PasswordGenerator,
    githubLink: 'https://github.com/saritakharabe/password-generator',
    deployedLink: "https://saritakharabe.github.io/password-generator/",
  },

];
