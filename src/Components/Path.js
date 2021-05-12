import AboutUs from "./../Pages/AboutUs/AboutUs";
import Services from "./../Pages/Services";
import ContactUs from "./../Pages/ContactUs";
import Home from "../Pages/Home/index";
import Solutions from "../Pages/SolutionsPage/Solutions"
import Career from "../Pages/Careers/Container"

const pathIds = {
  home: "home",
  about: "about",
  services: "services",
  solutions: "solutions",
  caseStudies: "caseStudies",
  careers: "careers",
  contactUs: "contactUs",
};

const pathRouting = {
  home: "/home",
  about: "/about",
  services: "/services",
  solutions: "/solutions",
  caseStudies: "/caseStudies",
  careers: "/careers",
  contactUs: "/contactUs",
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
  [pathIds.solutions]: {
    path: pathRouting.solutions,
    sidebarName: "Solutions",
    component: Solutions
  },
  [pathIds.caseStudies]: {
    path: pathRouting.caseStudies,
    sidebarName: "Case Studies",
  },
  [pathIds.careers]: {
    path: pathRouting.careers,
    sidebarName: "Careers",
    component: Career
  },
  [pathIds.contactUs]: {
    path: pathRouting.contactUs,
    sidebarName: "Contact Us",
    component: ContactUs,
  },
};

export { pageRoutes, pathIds, pathRouting };
