import HandsonPage from "pages/handson";
import HomeworkPage from "pages/homework";
import LandingPage from "pages/landing";

export const PAGES = [
  {
    path: "/",
    component: LandingPage,
    navbar: false,
    exact: true,
  },
  {
    path: "/playlist",
    component: HomeworkPage,
    navbar: true,
    exact: true,
  },
  {
    path: "/handson",
    component: HandsonPage,
    navbar: true,
    exact: true,
  },
  {
    path: "/trending",
    component: HandsonPage,
    navbar: true,
    exact: true,
  },
];
