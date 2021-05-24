import AboutUs from "./../Pages/AboutUs/AboutUs";
import Services from "./../Pages/Services";
import Home from "../Pages/Home/index"
import Solutions from "../Pages/SolutionsPage/Solutions"
import Event from "../Pages/Event/Index"
import Testimonials from "../Pages/Testimonials";
import Career from "../Pages/Careers/Container"
import AppSolutions from "../Pages/AppSolutionsPage/Container"
import OurBlogs from "../Pages/OurBlogs";
import Quote from "../Pages/ContactUs/index"
import Pricing from "../Pages/PricingPage/PricingContainer"
const pathIds = {
  home: "home",
  blogs: "blogs",
  about: "about",
  services: "services",
  solutions: "solutions",
  caseStudies: "caseStudies",
  careers: "careers",
  event: "event",
  testimonial: "/testimonial",
  appSolutions: "appSolutions",
  requestAQuote: "requestAQuote",
  pricing: "pricing"
};

 const pathRouting = {
  home: "/home",
  blogs: "/blogs",
  about: "/about",
  services: "/services",
  solutions: "/solutions",
  caseStudies: "/case-studies",
  careers: "/careers",
  event: "/event",
  testimonial: "/testimonial",
  appSolutions: "/app-solutions",
  requestAQuote: "/request-a-quote",
  pricing : "/pricing"
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
  [pathIds.careers]: {
    path: pathRouting.careers,
    sidebarName: "Careers",
    component: Career,
  },
  [pathIds.appSolutions]: {
    path: pathRouting.appSolutions,
    sidebarName: "App Solutions",
    component: AppSolutions
  },
  [pathIds.testimonial]: {
    path: pathRouting.testimonial,
    sidebarName: "Testimonials",
    component:Testimonials,
  },
  [pathIds.requestAQuote]: {
    path: pathRouting.requestAQuote,
    sidebarName: "Request a quote",
    component: Quote,
  },
  [pathIds.pricing]: {
    path: pathRouting.pricing,
    sidebarName: "Pricing",
    component: Pricing,
  },
};

export { pageRoutes, pathIds, pathRouting };
