import * as Icons from "../../../../assets/icons/icon.constants";
import { Colors } from "../../../../Theme/color.constants";
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

const { App, Profile, Web, Digital } = Icons;
const { Serenade, FairPink, AquaSpring, LilyWhite } = Colors;

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

export const ServicesPageBanner = {
  title: "Wide range of Custom Services for your Business",
  subtitle: "Solutions designed by experts & enforced by latest technologies.",
  buttonText: "Get Started",
};

export const ServicesOfferedSection = {
  title: "Services We Offer",
  subtitle: "are built with cutting edge technologies & customized as you need",
  values: [
    {
      color: AquaSpring,
      icon: Web,
      redirect: "/web-development-services",
      title: "Web Development",
      desc: " We offer end-to-end, full-cycle app development solutions that deliver personalized user experiences ensuring higher life-time value.",
    },
    {
      color: LilyWhite,
      icon: Digital,
      redirect: "digital-marketing",
      title: "Digital Marketing",
      desc: "The future is digital. With Magnit’s help, dominate your market through conversions and lead driven content. Make information work for you to create an indestructible online presence.",
    },
    {
      color: Serenade,
      icon: App,
      redirect: "/hire-developer",
      title: "Developer Hiring",
      desc: " In compliance with global standards, we can quickly build you a team that suits your business case from our talent pool of developers with industry-specific skills.",
    },
    {
      color: FairPink,
      icon: Profile,
      redirect: "/app-solutions",
      title: "App Development",
      desc: "Through a deep understanding of our client’s environment, market, vision, we provide the latest, efficient, adaptive and value add technology to put them a step above the competition.",
    },
  ],
};

export const BenifitsSection = {
  title: "Benefits of Our Sevices",
  data: [
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


  ],
};
