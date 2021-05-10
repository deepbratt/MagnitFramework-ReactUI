import ride from "../../../../assets/solutions/car.png";
import job from "../../../../assets/solutions/portal.png";
import dating from "../../../../assets/solutions/dating.png";
import chat from "../../../../assets/solutions/chat.png";
import money from "../../../../assets/solutions/money.png";
import fitness from "../../../../assets/solutions/barbell.png";
import bannerImage from "../../../../assets/solutions/BannerImage.png";
import {
  Time,
  Money,
  Quality,
  Support,
  Data,
  customIcon,
  techIcon,
  ideaIcon,
} from "../../../../assets/icons/icon.constants";
import { Colors } from "../../../../Theme/color.constants";

const {
  Malibu,
  Heliotrope,
  AquamarineBlue,
  HavelockBlue,
  TexasRose,
  yellowOrange,
  Niagara,
  DodgerBlue,
} = Colors;

export const benefitsData = [
  {
    color: Malibu,
    icon: Time,
    title: "Save Time & Money",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: Heliotrope,
    icon: techIcon,
    title: "Latest Technology",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: AquamarineBlue,
    icon: Money,
    title: "One Time Cost",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: HavelockBlue,
    icon: Quality,
    title: "Assurance of Quality",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  
];

export const benefitsSecondaryData = [
  {
    color: TexasRose,
    icon: customIcon,
    title: "Customize as you Need",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: Niagara,
    icon: ideaIcon,
    title: "You own the Code",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: yellowOrange,
    icon: Support,
    title: "Life Time Support",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    color: DodgerBlue,
    icon: Data,
    title: "Data Security",
    desc:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitse do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
]

export const Array = [
  {
    Icon: ride,
    title: "Solutions we offer",
    paragraph:
      "are built with cutting edge technologies & customized as you need",
  },
  {
    Icon: job,
    title: "Job Portal Solution",
    paragraph:
      "are built with cutting edge technologies & customized as you need",
  },
  {
    Icon: dating,
    title: "Dating App",
    paragraph:
      "are built with cutting edge technologies & customized as you need",
  },
  {
    Icon: chat,
    title: "Chatting app",
    paragraph:
      "are built with cutting edge technologies & customized as you need",
  },
  {
    Icon: money,
    title: "Croud funding",
    paragraph:
      "are built with cutting edge technologies & customized as you need",
  },
  {
    Icon: fitness,
    title: "Fitness App",
    paragraph:
      "are built with cutting edge technologies & customized as you need",
  },
];

export const heading = "Solutions we offer";
export const subheading =
  "are built with cutting edge technologies & customized as you need";
export const BannerImage = bannerImage;
export const benefitsHeading = "Benefits of";
export const benefitsSubheading = "Our Solutions"
export const BannerHeading = "Wide range of Custom Solutions"
export const Bannersubheading = "for your Business"
export const paragraph = "We have a talent pool of qualified & well-experienced web developers."

export default {
  Array,
  benefitsData,
  benefitsSecondaryData
}
