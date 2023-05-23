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
import NationalPark from './assets/image/projects/park.jpg'
import SvgLogo from './assets/image/projects/circle.png'

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
    description: " We here to help you plan your next outdoor getaway",
    image: NationalPark,
    link: "https://github.com/saritakharabe/p1-national-parks-locator",
  },
  {
    id: 2,
    title: "Nexus App",
    subtitle: "Full-Stack App",
    description:
      "Nexus is a Full-Stack application allows users to sign up and create an account, swhere they can input profile information, pictures, and write their own posts.",
    image: CollegeHacks,
    link: "https://stark-castle-24891.herokuapp.com/",
  },
  {
    id: 3,
    title: "SVG Logo Generator",
    subtitle: "Nodejs ",
    description: "This project is used to build logo for application.",
    image: SvgLogo,
    link: "https://github.com/saritakharabe/OOP-SVG-logo-maker",
  },
];
