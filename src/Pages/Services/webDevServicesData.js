import {
  CMSIcon,
  EcommerceIcon,
  WebAppIcon,
  APIDevIcon,
  MigrationIcon,
  IssuesIcon,
} from "../../assets/icons/icon.constants";
import { Colors } from "../../Theme/color.constants";

const {
  skyblue,
  lightblue,
  Orchid,
  pastelOrange,
  persianGreen,
  yellowOrange,
} = Colors;
export const OurExpertEngineers="Our expert engineers directly translate ideas and designs into responsive front-end interfaces that pioneer accessibility, ease-of-use, and performance towards your audiences."
export const webDevServicesData = [
  {
    color: skyblue,
    icon: CMSIcon,
    title: "CMS Development",
    desc:
      "We tailor a unique, user-friendly, intuitive front-end content Management system framework that ‘looks’ and ‘feels’ right to your audience while suiting your business needs.",
  },
  {
    color: lightblue,
    icon: EcommerceIcon,
    title: "Ecommerce Development",
    desc:
      "Boom your retail store with end-to-end e-commerce service that is designed specifically for your target audience and increases traffic in your store. ",
  },
  {
    color: Orchid,
    icon: WebAppIcon,
    title: "Custom Web App Development",
    desc:
      "Create a dynamic online presence for your business with personalized robust, agile and user-centric web applications that are as easy to integrate as they are to use.",
  },
  {
    color: pastelOrange,
    icon: APIDevIcon,
    title: "API Development",
    desc:
      "Be it client side or server side, our experienced team of engineers develop bleeding edge API designs that not only make it simpler to navigate through the server or the hosting website but also make application user friendly.",
  },
  {
    color: persianGreen,
    icon: MigrationIcon,
    title: "Migration & Upgradation",
    desc:
      " We help to upgrade existing websites and applications to advanced versions without downtime or delay so that your business can run smoothly without loosing any traffic.",
  },
  {
    color: yellowOrange,
    icon: IssuesIcon,
    title: "Issues & Bug Fixes",
    desc:
      "To optimize performance of your web application we resolve issues and bugs in your source code in a cost-effective way.",
  },
];
