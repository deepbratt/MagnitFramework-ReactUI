import Banner from "../../../../assets/career/banner.png";
import * as Icons from "../../../../assets/icons/icon.constants";
import RightPattern from "../../../../assets/career/rightPattern.png"
import LeftPattern from "../../../../assets/career/leftPattern.png"
import { Colors } from "../../../../Theme/color.constants";

export const banner = Banner;
export const rightPattern = RightPattern
export const leftPattern = LeftPattern
const { Timing, Geo, Grow, Health, mapIcon } = Icons;
const { darkBlueColor, rosePinkColor, seaGreen, mustardColor } = Colors;
export const MainData = {
  heading: "Join our Team",
  subHeading:
    "Find out what you like doing best and get someone to pay you for doing it.",
  para: "Become a part of the most enthusiastic tech team in town. If you are a passionate soul with a zest to learn and grow, we are the place for you!  ",
  buttonText: "View Openings",
};

export const Data = {
  title: "Why Work ",
  subTitle: "with us?",
};

export const Array = [
  {
    color: darkBlueColor,
    icon: Timing,
    title: "Flexible Hours",
    desc: "We pay not for your time but for your brains. We appreciate time-bound work irrespective of the time-zone you live in",
  },
  {
    color: rosePinkColor,
    icon: Geo,
    title: "Work from anywhere",
    desc: "With or without pandemic, work from wherever you are comfortable."
  },
  {
    color: seaGreen,
    icon: Grow,
    title: "Company growth",
    desc:"We believe that growth is constant and hence welcome feedback and ideas."
  },
  {
    color: mustardColor,
    icon: Health,
    title: "Health First",
    desc: "We would like you to keep your health above everything else, so we give timely offs and prepare easy schedules."
  },

];

// Current Oppurtunities

export const heading = "Current Opportunities"
export const DataArray = [
  {

    title: "Full Stack Developer",
    span: "Remote",
    icon: mapIcon,
    desc: "We are looking for a Full Stack JavaScript Developer who is motivated to combine the art of design with the art of programming. Responsibilities will include creating back-end services, as well as implementing visual elements and their behaviors with user interactions. You will work with a talented team of both front-end and back-end web developers.",
    buttonText: "Apply now"
  },
  {

    title: "UI/UX Designer",
    span: "Remote",
    icon: mapIcon,
    desc: "Magnit is looking for a skillful and experienced UX / UI Designer to work with multiple projects to enhance the user experience. As a key UX Designer, you will be working in collaboration with worldwide industry experts. Join our bright engineering team with open communication, empowerment, innovation, and customer-centric culture.",
    buttonText: "Apply now"
  },
  {

    title: "Front-End Developer",
    span: "Remote",
    icon: mapIcon,
    desc: "We are looking for a Front End Developer to join our growing Connected Business team. The hire will be responsible for building web applications and maintaining our Front end infrastructure. The ideal candidate is an experienced web developer who enjoys developing applications and building them from the ground up. The Front End Developer will collaborate with our software engineers and data scientists to ensure optimal delivery of our software products.",
    buttonText: "Apply now"
  },
  {

    title: "React.js Developer",
    span: "Remote",
    icon: mapIcon,
    desc: "We are looking for React Developers who are responsible for development, programming, coding of Information Technology solutions using ReactJS, Redux, D3 and NodeJS to enable Customer Experience applications",
    buttonText: "Apply now"
  },
  {

    title: "React Native Developer",
    span: "Remote",
    icon: mapIcon,
    desc: " We are looking for an experienced React Native Developer to join our team who can develop React Native applications for both IOS and Android.",
    buttonText: "Apply now"
  },
  {

    title: "Node.js Developer",
    span: "Remote",
    icon: mapIcon,
    desc: "We are looking for a Node.js Developer who is responsible for development, programming, coding of Information Technology solutions using NodeJS to enable Customer Experience applications.",
    buttonText: "Apply now"
  },
]

export default { Array,DataArray,heading };
