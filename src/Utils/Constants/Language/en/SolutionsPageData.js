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
    length: 57,
    color: Malibu,
    icon: Time,
    title: "Save Time & Money",
    desc: "Our Client’s time is their money is the belief of our every project. To deliver custom solutions on time within the budget of the client is our biggest priority",
  },
  {  
    length: 57,
    color: Heliotrope,
    icon: techIcon,
    title: "Latest Technology",
    desc: "We are armed with knowledge and experience of the latest technology. We keep an eye out for the newest tools in software technology and the trends in your industry.",
  },
  {
    length: 57,
    color: AquamarineBlue,
    icon: Money,
    title: "One Time Cost",
    desc: "You don’t need to pay on every step of the solution development process. You can request a quote to see what fits your budget.",
  },
  {
    length: 57,
    color: HavelockBlue,
    icon: Quality,
    title: "Assurance of Quality",
    desc: "Strict Quality control is the pillar of our customized solutions. An independent team makes sure that there is no compromise on Quality solutions.",
  },
  {
    length: 57,
    color: TexasRose,
    icon: customIcon,
    title: "Customize as you Need",
    desc: "We create a deep understanding of your market and target audience before tailoring a solution specific to your needs.",
  },
  {
    length: 57,
    color: Niagara,
    icon: ideaIcon,
    title: "You own the Code",
    desc: " After the completion of the project, the source code would be handed over to you.",
  },
  {
    length: 57,
    color: yellowOrange,
    icon: Support,
    title: "Lifetime",
    desc: " We do not limit ourselves to just the project. Our team goes beyond the call to fix bugs and issues in the code to ensure customer satisfaction.",
  },
  {
    length: 57,
    color: DodgerBlue,
    icon: Data,
    title: "Data Security",
    desc: "Our client’s security is our top priority. Any confidential information shared with us is protected with the latest security measures, tools and regulations.",
  },
  {
    length: 57,
    color: TexasRose,
    icon: customIcon,
    title: "Customize as you Need",
    desc: "We create a deep understanding of your market and target audience before tailoring a solution specific to your needs.",
  },
  {
    length: 57,
    color: Niagara,
    icon: ideaIcon,
    title: "You own the Code",
    desc: " After the completion of the project, the source code would be handed over to you.",
  },
 
];

export const SolutionOfferedSection = {
  title: "Services we offer",
  subtitle: "are built with cutting edge technologies & customized as you need",
  values: [
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
  ],
};


export const heading = "Solutions we offer";
export const subheading =
  "are built with cutting edge technologies & customized as you need";
export const BannerImage = bannerImage;
export const benefitsHeading = "Benefits of Our Solutions";
export const BannerHeading = "Wide range of Custom Solutions";
export const Bannersubheading = "for your Business";
export const paragraph =
  "We have a talent pool of qualified & well-experienced web developers.";
