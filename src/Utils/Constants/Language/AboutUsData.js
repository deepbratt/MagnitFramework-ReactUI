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
  paragraph: [
    "With the advent of the digital age, it has become imperative to have an online footprint for your Business. However, not many are able to optimize the potential of their business and get lost in this virtual sea of countless commerce.",
    "That is where we come in.",
    "Magnit is a digital Swissknife for your business. We provide 360-degree software solutions handpicked to cater to your industry-specific needs. We transform your ideas into solutions that puts your business a digital step ahead of the others.",
  ],
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
  missionText:
    "Efficient, time-bound, error-free work generates a trust no amount of advertising can achieve. Our Mission, at Magnit, is to exceed the expectations of our clients with robust, future-proof personalized solutions that will keep adding value to them in years to come.",
  visionText:
    "There is no substitute to dedicated, efficient work. With a passionate work culture, we aim to be the best performers in providing IT solution services in the Global Market, achieving exponential growth and success for your businesses along the way.",
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
