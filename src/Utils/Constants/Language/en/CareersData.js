import Banner from "../../../../assets/career/banner.png";
import * as Icons from "../../../../assets/icons/icon.constants";
import RightPattern from "../../../../assets/career/rightPattern.png"
import LeftPattern from "../../../../assets/career/leftPattern.png"
import { Colors } from "../../../../Theme/color.constants";

export const banner = Banner;
export const rightPattern = RightPattern
export const leftPattern = LeftPattern
const { Timing, Geo, Grow, Health, mapIcon } = Icons;
const { darkBlueColor, rosePinkColor, SeaGreen, mustardColor } = Colors;
export const MainData = {
  heading: "Join our Team",
  subHeading:
    "Find out what you like doing best and get someone to pay you for doing it.",
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
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
    desc: "It doesn’t matter which timezone you work from, as long as your work is complete by the end of the day.",
  },
  {
    color: rosePinkColor,
    icon: Geo,
    title: "Work from Anywhere",
    desc: "Since we are a remote team, you can work from anywhere, whether it be from home, a cafe, or the beach."
  },

  {
    color: SeaGreen,
    icon: Grow,
    title: "Company Growth",
    desc: "We are all learning, and we are not perfect. Any feedback or ideas you are always welcome."
  },

  {
    color: mustardColor,
    icon: Health,
    title: "Health First",
    desc: "We want you to always be feeling your best, gym membership up to $100 per year for full time employees."
  },
];


// Current Oppurtunities

export const heading = "Current Opportunities"
export const DataArray = [
  {

    title: "Front-End Developer",
    span: "Chicago, USA",
    icon: mapIcon,
    desc: "We are looking for a product/project manager with experience in building digital products and a good understanding of the design process (wireframes, visual explorations...).",
    buttonText: "Apply now"
  },
  {

    title: "Front-End Developer",
    span: "Chicago, USA",
    icon: mapIcon,
    desc: "We are looking for a product/project manager with experience in building digital products and a good understanding of the design process (wireframes, visual explorations...).",
    buttonText: "Apply now"
  },
  {

    title: "Front-End Developer",
    span: "Chicago, USA",
    icon: mapIcon,
    desc: "We are looking for a product/project manager with experience in building digital products and a good understanding of the design process (wireframes, visual explorations...).",
    buttonText: "Apply now"
  },
  {

    title: "Front-End Developer",
    span: "Chicago, USA",
    icon: mapIcon,
    desc: "We are looking for a product/project manager with experience in building digital products and a good understanding of the design process (wireframes, visual explorations...).",
    buttonText: "Apply now"
  },
  {

    title: "Front-End Developer",
    span: "Chicago, USA",
    icon: mapIcon,
    desc: "We are looking for a product/project manager with experience in building digital products and a good understanding of the design process (wireframes, visual explorations...).",
    buttonText: "Apply now"
  },
  {

    title: "Front-End Developer",
    span: "Chicago, USA",
    icon: mapIcon,
    desc: "We are looking for a product/project manager with experience in building digital products and a good understanding of the design process (wireframes, visual explorations...).",
    buttonText: "Apply now"
  },
]

export default { Array,DataArray,heading };
