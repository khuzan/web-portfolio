import {
  IMG1,
  IMG2,
  IMG3,
  IMG4,
  IMG5,
  IMG6,
  Av1,
  Av2,
  Av3,
  Av4,
  evogym,
  hoobank,
  janeesper,
} from "../assets";

import { FaAward } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";

import { HiOutlineMail } from "react-icons/hi";
import { FaSquareUpwork } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io5";

export const about = [
  {
    title: "Experience",
    description: "5+ Years Working",
    icon: <FaAward className="about__icon" />,
  },
  {
    title: "Clients",
    description: "5+ Worldwide",
    icon: <FiUsers className="about__icon" />,
  },
  {
    title: "Projects",
    description: "5+ Completed",
    icon: <VscFolderLibrary className="about__icon" />,
  },
];

export const frontend = [
  {
    skill: "HTML/CSS",
    rate: "Experienced",
  },
  {
    skill: "JQuery",
    rate: "Experienced",
  },
  {
    skill: "Javascript",
    rate: "Experienced",
  },
  {
    skill: "Bootstrap",
    rate: "Experienced",
  },
  {
    skill: "Tailwind",
    rate: "Experienced",
  },
  {
    skill: "React",
    rate: "Experienced",
  },
];

export const backend = [
  {
    skill: "NodeJS",
    rate: "Experienced",
  },
  {
    skill: "MySQL",
    rate: "Experienced",
  },
  {
    skill: "PHP",
    rate: "Experienced",
  },
  {
    skill: "Laravel",
    rate: "Experienced",
  },
  {
    skill: "C#",
    rate: "Experienced",
  },
  {
    skill: "ASP.NET",
    rate: "Experienced",
  },
];

export const seo = [
  {
    skill: "Link Prospecting",
    rate: "Experienced",
  },
  {
    skill: "Personalizer",
    rate: "Experienced",
  },
];

export const portfolio = [
  {
    id: 1,
    image: evogym,
    title: "EVOGYM",
    github: "https://github.com",
    demo: "demo",
  },
  {
    id: 2,
    image: hoobank,
    title: "HooBank",
    github: "https://github.com",
    demo: "demo",
  },
  {
    id: 3,
    image: janeesper,
    title: "Portfolio",
    github: "https://github.com",
    demo: "demo",
  },
];

export const experience__web = [
  {
    title: "Fullstack Developer",
    company: "iBEST Integrating Systems",
    description: "Develop web applications such as Point of sales, Inventory System and Reward System."
  },
  {
    title: "Software Engineer",
    company: "Professy.Inc",
    description: "Maintaining existing application which is Qualva - a chatbot with multiple functionalities."
  },
];

export const experience__seo = [
  {
    title: "Link Prospector",
    company: "JustWatch",
    description: "Add the most relevant prospects by finding and verifying their contact info as well as evaluating the appropriate website metrics."
  },
  {
    title: "Pitchbox - Prospector + Personalizer",
    company: "ArkenDigital",
    description: "Use Pitchbox to identify, analyze, and evaluate high-quality backlink prospects."
  },
]

export const testimonials = [
  {
    avatar: Av1,
    name: "Tina Snow",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    avatar: Av2,
    name: "Maris",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    avatar: Av3,
    name: "Clyx",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
  {
    avatar: Av4,
    name: "Ant",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
  },
];


export const contact__options = [
  {
    platform: "Email",
    profile: "am****@gmail.com",
    icon: <HiOutlineMail className="contact__option-icon" />,
    link: "mailto:dummy@gmail.com"
  },
  {
    platform: "Upwork",
    profile: "Profile",
    icon: <FaSquareUpwork className="contact__option-icon" />,
    link: "https://www.upwork.com/freelancers/~01670f5dc03ab04ed4?mp_source=share"
  },
  {
    platform: "LinkedIn",
    profile: "Profile",
    icon: <IoLogoLinkedin className="contact__option-icon" />,
    link: "https://www.linkedin.com/in/aljon-mar-omandac-a3a653341/"
  },
]
