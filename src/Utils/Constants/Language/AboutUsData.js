import missionIcon from "../../../assets/AboutUs/rocket.svg";
import visionIcon from "../../../assets/AboutUs/vision.svg";
import founded from "../../../assets/AboutUs/founded.png";
import employee from "../../../assets/AboutUs/employee.png";
import projects from "../../../assets/AboutUs/projects.png";
import rating from "../../../assets/AboutUs/rating.png";
import FoundersyImg from "../../../assets/AboutUs/Img2.png";
import Img from "../../../assets/AboutUs/Img3.png";
import { Colors } from "../../../Theme/color.constants";
const { kellyGreen, rosePinkColor, brandeisBlue, mustardColor } = Colors;

const MainData = {
  title: "About Us",
  mission: missionIcon,
  vision: visionIcon,
  Img: FoundersyImg,
  heroImgsrc: Img,
  subTitle: "Cathrine Doe",
  span: "CEO Megmite",
  heading: "Meet Our Foundersy",
  paragraph:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco laboris nisi ut aliquip Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco laboris nisi ut aliquip",
  paragraphPrimary:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, seddo eiusmod tempor incididunt ut labore et dolore magnaaliqua. Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat.",
  paragraphSecondary:
    "Ut enim ad minim veniam, quis nostrud exercitation ullamcolaboris nisi ut aliquip ex ea commodo consequat. Duis auteirure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

// Number Section Data
const Stats = [
  {
    title: "2010",
    sutitle: "FOUNDED IN THE YEAR",
    icon: founded,
    color: kellyGreen,
  },
  {
    title: "200+",
    sutitle: "FULL TIME EMPLOYEES",
    icon: employee,
    color: rosePinkColor,
  },
  {
    title: "2000+",
    sutitle: "TOTAL PROJECTS COMPLETE",
    icon: projects,
    color: brandeisBlue,
  },
  {
    title: "90%+",
    sutitle: "CUSTOMER RETENTION RATE",
    icon: rating,
    color: mustardColor,
  },
];

const MidSection = {
  heading: "Mission and Vision",
  firstTitle: "Our Mission",
  secondTitle: "Our Vision",
  paragraph:
    "Working with Brainium has been nothing short of excellent. The response time, commitment and delivery far exceeded my expectations.",
};

// Infrastructure

const Infrastructure = {
  heading: "Infrastructure",
  subTitleOne: "Development Center",
  subTitleTwo: "In IT Hub",
  subTitleThree: "Leased Line",
  subTitleFour: "Our Workplace",
  paragraphOne:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
};

export { MainData, Stats, MidSection, Infrastructure };
