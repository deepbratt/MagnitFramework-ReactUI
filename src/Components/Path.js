// import AboutUs from "./../Pages/AboutUs/AboutUs";
// import Services from "./../Pages/Services";
// import WebServices from "../Pages/WebServices";
// import Home from "../Pages/Home/index";
// // import Event from "../Pages/Event/Index";
// import Testimonials from "../Pages/Testimonials";
// import Career from "../Pages/Careers/Container";
// import AppSolutions from "../Pages/AppSolutionsPage/Container";
// import OurBlogs from "../Pages/OurBlogs";
// import Quote from "../Pages/ContactUs/index";
// import HireDeveloper from "../Pages/HireDeveloper";
// import DigitalMarketing from "../Pages/DigitalMarketing";
// import CaseStudies from "../Pages/CaseStudies";
import RenderBlog from '../Pages/RenderBlog';


import AboutUs from "./../Pages/AboutUs/AboutUs"
import Home from "../Pages/Home/index"
import Services from "./../Pages/Services"
import WebServices from "./../Pages/WebServices"
import Testimonials from "./../Pages/Testimonials"
import OurBlogs from "./../Pages/OurBlogs"
import Quote from "./../Pages/ContactUs"
import HireDeveloper from "./../Pages/HireDeveloper"
import DigitalMarketing from "./../Pages/DigitalMarketing"
import CaseStudies from "./../Pages/CaseStudies"
import AppSolutions from "./../Pages/AppSolutionsPage/Container"
import Career from "./../Pages/Careers/Container"
import WebDevelopment from '../Pages/SEOpages/web-development';
import MobileAppDevelopment from '../Pages/SEOpages/mobile-development';
import DeveloperHiring from '../Pages/SEOpages/developer-hiring';
import DigitalMarketingUSA from '../Pages/SEOpages/digital-marketing-usa';
// const AboutUs = lazy(() =>import("./../Pages/AboutUs/AboutUs"));
// const Services = lazy(() =>import("./../Pages/Services"));
// const WebServices = lazy(() =>import("../Pages/WebServices"));
// const Home = lazy(() =>import("../Pages/Home/index"));
// const Testimonials = lazy(() =>import("../Pages/Testimonials"));
// const Career = lazy(() =>import("../Pages/Careers/Container"));
// const AppSolutions = lazy(() =>import("../Pages/AppSolutionsPage/Container"));
// const OurBlogs = lazy(() =>import("../Pages/OurBlogs"));
// const Quote = lazy(() =>import("../Pages/ContactUs/index"));
// const HireDeveloper = lazy(() =>import("../Pages/HireDeveloper"));
// const DigitalMarketing = lazy(() =>import("../Pages/DigitalMarketing"));
// const CaseStudies = lazy(() =>import("../Pages/CaseStudies"));

const pathIds = {
  home: "home",
  blogs: "blogs",
  about: "about",
  services: "services",
  webServices: "web-development-services",
  solutions: "solutions",
  caseStudies: "caseStudies",
  careers: "careers",
  event: "event",
  testimonial: "/testimonial",
  appSolutions: "appSolutions",
  requestAQuote: "requestAQuote",
  hireDeveloper: "hire-developer",
  digitalMarketing: "digital-marketing",
  pricing: "pricing",
  notFound: "404",
  renderBlog: 'render-blog',
  webDevelopmentUSA: 'web-development' ,
  appDevelopmentUSA: 'app-development' ,
  developerHiringUSA: 'developer-hiring' ,
  digitalMarketingUSA: 'digital-marketing-usa' ,
};

const pathRouting = {
  home: "/home",
  blogs: "/blogs",
  about: "/about",
  services: "/services",
  webServices: "/web-development-services",
  solutions: "/solutions",
  caseStudies: "/case-studies",
  careers: "/careers",
  event: "/event",
  testimonial: "/testimonial",
  appSolutions: "/app-solutions",
  requestAQuote: "/request-a-quote",
  hireDeveloper: "/hire-developer",
  digitalMarketing: "/digital-marketing",
  pricing: "/pricing",
  notFound:"error",
  renderBlog:'/blog/:canonicalId',
  webDevelopmentUSA:"/web-development-usa",
  appDevelopmentUSA:"/app-development-usa",
  developerHiringUSA: '/developer-hiring-usa' ,
  digitalMarketingUSA: '/digital-marketing-usa' ,
};

const pageRoutes = {
  [pathIds.home]: {
    path: pathRouting.home,
    sidebarName: "Home",
    component: Home,
  },
  [pathIds.about]: {
    path: pathRouting.about,
    sidebarName: "About Us",
    component: AboutUs,
  },
  [pathIds.services]: {
    path: pathRouting.services,
    sidebarName: "Services",
    component: Services,
  },
  [pathIds.webServices]: {
    path: pathRouting.webServices,
    sidebarName: "Web Development Services",
    component: WebServices,
  },
  [pathIds.careers]: {
    path: pathRouting.careers,
    sidebarName: "Careers",
    component: Career,
  },
  [pathIds.appSolutions]: {
    path: pathRouting.appSolutions,
    sidebarName: "App Solutions",
    component: AppSolutions,
  },
  [pathIds.testimonial]: {
    path: pathRouting.testimonial,
    sidebarName: "Testimonials",
    component: Testimonials,
  },
  [pathIds.caseStudies]: {
    path: pathRouting.caseStudies,
    sidebarName: "Case Studies",
    component: CaseStudies,
  },
  [pathIds.blogs]: {
    path: pathRouting.blogs,
    sidebarName: "Blogs",
    component: OurBlogs,
  },
  [pathIds.requestAQuote]: {
    path: pathRouting.requestAQuote,
    sidebarName: "Request a quote",
    component: Quote,
  },
  [pathIds.hireDeveloper]: {
    path: pathRouting.hireDeveloper,
    sidebarName: "Hire Developer",
    component: HireDeveloper,
  },
  [pathIds.digitalMarketing]: {
    path: pathRouting.digitalMarketing,
    sidebarName: "Digital Marketing",
    component: DigitalMarketing,
  },
  [pathIds.webDevelopmentUSA]: {
    path: pathRouting.webDevelopmentUSA,
    // sidebarName: "Digital Marketing",
    component: WebDevelopment,
  },
  [pathIds.appDevelopmentUSA]: {
    path: pathRouting.appDevelopmentUSA,
    // sidebarName: "Digital Marketing",
    component: MobileAppDevelopment,
  },
  [pathIds.developerHiringUSA]: {
    path: pathRouting.developerHiringUSA,
    // sidebarName: "Digital Marketing",
    component: DeveloperHiring,
  },
  [pathIds.digitalMarketingUSA]: {
    path: pathRouting.digitalMarketingUSA,
    // sidebarName: "Digital Marketing",
    component: DigitalMarketingUSA,
  },
  [pathIds.renderBlog]: {
    path: pathRouting.renderBlog,
    // sidebarName: "Digital Marketing",
    component: RenderBlog,
  },
  
  // [pathIds.solutions]: {
  //   path: pathRouting.solutions,
  //   sidebarName: "Solutions",
  //   component: Solutions,
  // },
  // [pathIds.solutions]: {
  //   path: pathRouting.blogs,
  //   sidebarName: "Our Blogs",
  //   component: OurBlogs,
  // },
  // [pathIds.notFound]: {
  //   sidebarName: "",
  //   component: Error,
  // },
};

export { pageRoutes, pathIds, pathRouting };
