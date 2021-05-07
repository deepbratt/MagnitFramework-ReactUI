import AboutUs from "./../Pages/AboutUs/AboutUs";
import Services from "./../Pages/Services";
// import Solutions from "./../Pages/SolutionsPage/Solutions"
import Home from "../Pages/Home/index"

const pathIds = {
  company: "company",
  about: "about",
  services: "services",
  solutions: "solutions",
  caseStudies: "caseStudies",
  careers: "careers",
};

const pathRouting = {
  company: "/company",
  about: "/about",
  services: "/services",
  solutions: "/soltutions",
  caseStudies: "/caseStudies",
  careers: "/careers",
};

const pageRoutes = {
  [pathIds.company]: {
    path: pathRouting.company,
    sidebarName: "Company",
    component: Home
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
    // component: Solutions,
  },
  [pathIds.caseStudies]: {
    path: pathRouting.caseStudies,
    sidebarName: "Case Studies",
  },
  [pathIds.careers]: {
    path: pathRouting.careers,
    sidebarName: "Careers",
  },
};

export { pageRoutes, pathIds, pathRouting };
