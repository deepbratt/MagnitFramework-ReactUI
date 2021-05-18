import image from "../../../../assets/solutions/image.png";
import BannerPattern from "../../../../assets/solutions/circlePattern.png";
import image1 from "../../../../assets/solutions/Img1.png";
import image2 from "../../../../assets/solutions/Img2.png";
import image3 from "../../../../assets/solutions/Img3.png";
import vector1 from "../../../../assets/solutions/triangle1.png";
import vector2 from "../../../../assets/solutions/triangle2.png";
import vector3 from "../../../../assets/solutions/triangle3.png";
import vector4 from "../../../../assets/solutions/triangle4.png";
import Icon1 from "../../../../assets/solutions/globe.png"
import Icon2 from "../../../../assets/solutions/vendors.png"
import Icon3 from "../../../../assets/solutions/book.png"
import Icon4 from "../../../../assets/solutions/phone.png"
import { Colors } from "../../../../Theme/color.constants";
import * as Icons from "../../../../assets/icons/icon.constants";
import Admin from "../../../../assets/solutions/admin.png"

const {
  lightOrange,
  Orchid,
  darkBlue,
  pastelBlue,
  seaGreen,
  peacockGreen,
  yellowOrange,
  lochmara,
  cerulean,
  robbinEggBlue,
  caribbeanGreen,
  pastelGreen
} = Colors;
const {
  registrationIcon,
  Time,
  tutorialIcon,
  browsingIcon,
  womanIcon,
  videoIcon,
  counterIcon,
  calculatorIcon,
  caloriesIcon,
} = Icons;

export const bannerHeading = "App Solution";
export const bannerParagraph =
  "Fitness apps lets instructors reach their clients over apps and instruct them, set regimes or routines and target, track progress and provide various tips. Additionally with social media implemented in it,users can post their activities and achievements.";
export const bannerButtonText = "Get Started";
export const bannerImage = image;
export const bannerPattern = BannerPattern;

// Salient Features section
export const heading = "Salient Features";
export const featuresDataOne = [
  {
    image: image1,
    icon: registrationIcon,
    color: lightOrange,
    title: "Easy user registration and login",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: Orchid,
    icon: Time,
    title: "Set routines or regimes",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: darkBlue,
    icon: tutorialIcon,
    title: "Tutorials",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: pastelBlue,
    icon: browsingIcon,
    title: "Guest browsing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

export const featuresDataTwo = [
  {
    image: image2,
    icon: womanIcon,
    color: seaGreen,
    title: "Profiles and settings",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: peacockGreen,
    icon: Time,
    title: "Date view or challenges view",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: darkBlue,
    icon: tutorialIcon,
    title: "Update progresses",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: lightOrange,
    icon: browsingIcon,
    title: "Track users and progress",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

export const featuresDataThree = [
  {
    image: image3,
    icon: videoIcon,
    color: yellowOrange,
    title: "Realtime video instructions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: pastelBlue,
    icon: counterIcon,
    title: "Step counter",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: seaGreen,
    icon: calculatorIcon,
    title: "BMI Calculator",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: darkBlue,
    icon: caloriesIcon,
    title: "Calorie information and history",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];
export const factsHeading = "Facts and Prospects of Fitness or Training Industry"
export const FactsData = [{
  avatar : Icon1,
  desc: "The global fitness industry (gyms, health clubs, training centers) is expected to reach $89,297.9m by the end of 2021 with an anticipated CAGR of 4.3% for the five-year period of 2016 - 2021."
},{
  avatar : Icon2,
  desc: "Though market demand is strong, but more success will be on finding the type of fitness business that will work for your local community."
},
{
  avatar : Icon3,
  desc: "With awareness and education about the importance of a healthy lifestyle, consumers who have shied away from the traditional gyms are now going to workout studios, outdoor boot camps and also joining online do-it-yourself programs."
},
{
  avatar : Icon4,
  desc: "With the popularity of smartphones, online courses are gaining popularity, specially apps where users can get customized routines and instructions."
}
]

export const stairCaseHeading = "How it works?"
export const StairCaseData = [{
  img: vector1,
  color: lochmara,
  margin: "130px",
  title: "Step 1",
  desc: "Send us your business requirements"
},
{
  img: vector2,
  color: cerulean,
  margin: "100px",
  title: "Step 2",
  desc: "We will analyse your requirement and get back to you with cost &time line of implementation"
},
{
  img: vector3,
  color: robbinEggBlue,
  margin: "70px",
  title: "Step 3",
  desc: "Once project is confirmed, we will start working on customising our solution to meet your requirments"
},
{
  img: vector4,
  color: caribbeanGreen,
  margin: "50px",
  title: "Step 4",
  desc: "You test application and confirm and we are ready for deployment"
},
{ img: vector1,
  margin: "5px",
  color: pastelGreen,
  title: "Step 5",
  desc: "We sign off the project and your Life Time Support starts!"
}
]

// Admin Section

export const adminHeading = "User Friendly Admin"
export const paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
export const adminImg = Admin

export default { featuresDataOne };
