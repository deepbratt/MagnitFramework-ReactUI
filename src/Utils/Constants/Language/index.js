import * as WebDesignAnimationData from "../../../Components/certificationList/webDesignAnimation.json";
import * as GraphicDesignAnimationData from "../../../Components/certificationList/graphicDesignAnimation.json";
import * as MarketingAnimationData from "../../../Components/certificationList/marketingAnimation.json";
import * as CulturallyAlignedAnimationData from "../../../Components/certificationList/culturallyAlignedAnimation.json";

export const reviewSliderText = {
  title: "Web Design",
  text: `This is the third project I have done with it the company, with many more to come in the and years ahead. Thank you for all you did.” \n
    This is the third project I have done with it the company, with many more to come in the and years ahead. Thank you for all you did.”`,
  author: "Aaron Doe",
};

export const trainingAndCertificationText = [
  {
    title: "Web Development",
    content:
      "We provide training in web development in various programming languages followed by Internships to put your knowledge to work.",
    animationData: WebDesignAnimationData,
  },
  {
    title: "Graphic Design",
    content:
      "Challenge your creative limits and think outside the box with our Graphic design training program.",
    animationData: GraphicDesignAnimationData,
  },
  {
    title: "Digital Marketing",
    content:
      "Learn to create professional first-impression with eye-catching material through a Digital Marketing campaign in our training programs.",
    animationData: MarketingAnimationData,
  }
];

export const footerText = {
  talkToUsSection: {
    title: "TALK TO US",
    numbers: [
      "USA: +1 (214) 329-9898",
      "India: +91 63993 52116",
      "Pakistan: +92 335 1222515",
    ],
  },
  addressSection: {
    title: "HEAD OFFICE",
    address:
      "1690 FM 423 Suite 9205,  Frisco, Texas 75033 – USA",

  },
  copyrights: "© 2021 The Magnit, All Rights Reserved.",
  contactUs: "CONNECT WITH US",
  navigation: {
    title: "Company",
    links: ["Service", "Solutions", "FAQ'S", "Career"],
  },
  lifeTimeSupport: "Life-Time Support",
  terms: "Terms of Service",
  disclaimer: "Disclaimer & Privacy Policy",
};

export const contactUsLabelsText = {
  heading: "Contact Us",
  subHeading: "Need any kind of help?",
  name: "Name",
  email: "Email",
  phoneNum: "Phone Number",
  companyName: "Company Name",
  message: "Project Details",
  submit: "Submit",
  privacy:
    "We respect your privacy and we guarantee that your contact details will never be shared with any third parties under any circumstances.",
};

export const errorBoundaryText = {
  heading: "OOPS! Something went wrong.",
  error: "Error",
  errorInformationHeading: "Error Information",
};
