import * as Icons from "../../../../assets/icons/icon.constants";
import { Colors } from "../../../../Theme/color.constants";

const { App, Profile, Web, Digital } = Icons;
const { Serenade, FairPink, AquaSpring, LilyWhite} =
  Colors;
export const Data = {
  title: "We Offer Quality",
  subTitle: "Services and Solutions",
  subheading: "To start-ups and enterprises across the globe",
};

export const ServicesData = [
  {
    color: Serenade,
    icon: App,
    title: "Developer Hiring",
    desc: " We let you hire developers from our talent pool at competitive prices with Dedicated hiring, Project based hiring, and Hourly hiring options.",
  },
  {
    color: FairPink,
    icon: Profile,
    title: "App Development",
    desc: " We develop and design applications for iOS, android and windows devices using our expertise in native and hybrid technologies",
  },

  {
    color: AquaSpring,
    icon: Web,
    title: "Web Development",
    desc: " We offer agile and cost-efficient web development solutions to give you a peerless experience in creating a strong online footprint.",
  },

  {
    color: LilyWhite,
    icon: Digital,
    title: "Digital Marketing",
    desc: "We provide integrated digital marketing solutions with the strategy and approach that is best suited to grow your business.",
  },
];

export default { ServicesData };
