import AboutUs from "./../Pages/AboutUs/AboutUs";
import Services from "./../Pages/Services";
import Home from "../Pages/Home/index"
import Solutions from "../Pages/SolutionsPage/Solutions"
import Event from "../Pages/Event/Index"
import Testimonials from "../Pages/Testimonials";
import Career from "../Pages/Careers/Container"
import AppSolutions from "../Pages/AppSolutionsPage/Container"
import OurBlogs from "../Pages/OurBlogs";

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
  appSolutions: "appSolutions"
};

const pathRouting = {
  home: "/home",
  blogs: "/blogs",
  about: "/about",
  services: "/services",
  solutions: "/solutions",
  caseStudies: "/caseStudies",
  careers: "/careers",
  event: "/event",
  testimonial: "/testimonial",
  appSolutions: "/appSolutions"
};

const pageRoutes = {
  [pathIds.home]: {
    path: pathRouting.home,
    sidebarName: "Home",
    component: Home,
  },
  [pathIds.blogs]: {
    path: pathRouting.blogs,
    sidebarName: "Blogs",
    component: OurBlogs,
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
  [pathIds.solutions]: {
    path: pathRouting.solutions,
    sidebarName: "Solutions",
    component: Solutions,
  },
  [pathIds.caseStudies]: {
    path: pathRouting.caseStudies,
    sidebarName: "Case Studies",
  },
  [pathIds.careers]: {
    path: pathRouting.careers,
    sidebarName: "Careers",
    component: Career,
  },
  [pathIds.appSolutions]: {
    path: pathRouting.appSolutions,
    component: AppSolutions
  },
    [pathIds.event]: {
    path: pathRouting.event,
    component:Event,
  },
  [pathIds.testimonial]: {
    path: pathRouting.testimonial,
    component:Testimonials,
  },
};

export { pageRoutes, pathIds, pathRouting };
