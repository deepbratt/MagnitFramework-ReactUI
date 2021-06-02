import image from "../../../../assets/solutions/image.png";
import BannerPattern from "../../../../assets/solutions/circlePattern.png";
import image1 from "../../../../assets/solutions/Img1.png";
import image2 from "../../../../assets/solutions/Img2.png";
import image3 from "../../../../assets/solutions/Img3.png";
import vector1 from "../../../../assets/solutions/triangle1.png";
import vector2 from "../../../../assets/solutions/triangle2.png";
import vector3 from "../../../../assets/solutions/triangle3.png";
import vector4 from "../../../../assets/solutions/triangle4.png";
import Icon1 from "../../../../assets/solutions/globe.png";
import Icon2 from "../../../../assets/solutions/vendors.png";
import Icon3 from "../../../../assets/solutions/book.png";
import Icon4 from "../../../../assets/solutions/phone.png";
import { Colors } from "../../../../Theme/color.constants";
import * as Icons from "../../../../assets/icons/icon.constants";
import Admin from "../../../../assets/solutions/admin.png";

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
  pastelGreen,
} = Colors;
const {
  registrationIcon,
  Time,
  tutorialIcon,
  dataIcon,
  browsingIcon,
  womanIcon,
  videoIcon,
  counterIcon,
  calculatorIcon,
} = Icons;

export const bannerHeading = "App Solution";
export const bannerParagraph =
  "We create functional modern and agile mobile apps catering to your needs be it to improve business efficiency, revenue or customer loyalty. Combining technical expertise with a passion for great user experience sets us apart from everyone else.";
export const bannerButtonText = "Get Started";
export const bannerImage = image;
export const bannerPattern = BannerPattern;

// Salient Features section
export const heading = "Salient Features";
export const featuresDataOne = {
  image: image1,
  content: [
    {
      icon: registrationIcon,
      color: lightOrange,
      title: "Easy user registration and login",
      desc: "We make registration and login easy for your audience so they are tempted to uninstall your app even before they start. ",
    },
    {
      color: Orchid,
      icon: womanIcon,
      title: "Profile and settings",
      desc: "We make it easy for your audience to customize the app the way they want it. Giving them a sense of ownership reduces their willingness to shift to your competitors.",
    },
    {
      color: darkBlue,
      icon: tutorialIcon,
      title: "Flexibility",
      desc: "We make sure that your app is flexible enough to adapt with different screen sizes, resolutions and operating systems.",
    },
    {
      color: pastelBlue,
      icon: browsingIcon,
      title: "Guest browsing",
      desc: "Users don’t like to give numbers and emails to apps for the fear of spam. We easily create panels for guest browsing that increase traffic to your app. ",
    },
  ],
};

export const featuresDataTwo = {
  image: image2,
  content: [
    {
      icon: womanIcon,
      color: seaGreen,
      title: "User friendly admin",
      desc: "We create out of the box admin panel which increases productivity, gives insight into data, and help us catch bugs.",
    },
    {
      color: peacockGreen,
      icon: Time,
      title: "Push Notifications",
      desc: "We set up push notifications in your app. They are relevant, personalized and aimed solely at the particular user and likely to be of interest to them",
    },
    {
      color: darkBlue,
      icon: tutorialIcon,
      title: "Update progresses",
      desc: "We keep track of the user feedback and create updates accordingly. This helps to keep your app fresh and give the user more of what they want.",
    },
    {
      color: lightOrange,
      icon: browsingIcon,
      title: "Track users",
      desc: " We map the journey of the users through your app to understand the key checkpoints and make improvements wherever necessary. ",
    },
  ],
};

export const featuresDataThree = {
  image: image3,
  content: [
    {
      icon: videoIcon,
      color: yellowOrange,
      title: "Realtime video instructions",
      desc: "If required we create panels to give a walkthrough of your services in your app to your audience",
    },
    {
      color: pastelBlue,
      icon: counterIcon,
      title: "Simplicity",
      desc: "We provide Clear, uncluttered screens with obvious leads to the next step which enhance user experience.",
    },
    {
      color: seaGreen,
      icon: calculatorIcon,
      title: "Speed",
      desc: "People have short attention span. We make sure that your customers access their information quickly and easily.",
    },
    {
      color: darkBlue,
      icon: dataIcon,
      title: "Security",
      desc: "With many applications storing personal and sensitive information or credit and debit card details, we make it a priority to provide absolute security to user data.",
    },
  ],
};

export const factsHeading =
  "Facts and Prospects of Fitness or Training Industry";
export const FactsData = [
  {
    avatar: Icon1,
    desc: "The global fitness industry (gyms, health clubs, training centers) is expected to reach $89,297.9m by the end of 2021 with an anticipated CAGR of 4.3% for the five-year period of 2016 - 2021.",
  },
  {
    avatar: Icon2,
    desc: "Though market demand is strong, but more success will be on finding the type of fitness business that will work for your local community.",
  },
  {
    avatar: Icon3,
    desc: "With awareness and education about the importance of a healthy lifestyle, consumers who have shied away from the traditional gyms are now going to workout studios, outdoor boot camps and also joining online do-it-yourself programs.",
  },
  {
    avatar: Icon4,
    desc: "With the popularity of smartphones, online courses are gaining popularity, specially apps where users can get customized routines and instructions.",
  },
];

export const stairCaseHeading = "How it works?";
export const StairCaseData = [
  {
    img: vector1,
    color: lochmara,
    margin: "130px",
    title: "Ideate",
    desc: "We understand your business and goals",
  },
  {
    img: vector2,
    color: cerulean,
    margin: "100px",
    title: "Journey Mapping",
    desc: "We do a deep analysis of your industry and target market",
  },
  {
    img: vector3,
    color: robbinEggBlue,
    margin: "70px",
    title: "Preparing Solutions",
    desc: "Based on the goals and research, we tailor solutions that cater to your needs",
  },
  {
    img: vector4,
    color: caribbeanGreen,
    margin: "50px",
    title: "Wireframing",
    desc: " We secure front and back end, full stack development, delivering working software in relevant intervals.",
  },
  {
    img: vector1,
    margin: "5px",
    color: pastelGreen,
    title: "Launch",
    desc: " Once all tests are done, your app goes live with a life-time support from our end.",
  },
];

// Admin Section

export const adminHeading = "User friendly admin panel";
export const paragraph =
  "The most important aspect of app development is usually not taken seriously by app developers. Making a user free admin panel is what sets us apart from our competitors.We make a state-of-art admin panel that increases productivity, gives insight into data, and helps us catch bugs. On the basis of your needs, we can turn the admin panel into a dashboard that allows manipulation of data within the user interface of the site.";
export const adminImg = Admin;
