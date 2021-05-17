import AboutUs from "./../Pages/AboutUs/AboutUs";
import Services from "./../Pages/Services";
import Home from "../Pages/Home/index";
import Solutions from "../Pages/SolutionsPage/Solutions";
import Career from "../Pages/Careers/Container";
import OurBlogs from "../Pages/OurBlogs";

const pathIds = {
  home: "home",
  blogs: "blogs",
  about: "about",
  services: "services",
  solutions: "solutions",
  caseStudies: "caseStudies",
  careers: "careers",
};

const pathRouting = {
  home: "/home",
  blogs: "/blogs",
  about: "/about",
  services: "/services",
  solutions: "/solutions",
  caseStudies: "/caseStudies",
  careers: "/careers",
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
};

export { pageRoutes, pathIds, pathRouting };
