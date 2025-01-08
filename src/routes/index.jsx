import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import HomeOne from "../pages/HomeOne";
import HomeTwo from "../pages/HomeTwo";
import HomeThree from "../pages/HomeThree";
import HomeFour from "../pages/HomeFour";
import About from "../pages/About";
import Service from "../pages/Service";
import ServiceDetails from "../pages/ServiceDetails";

import TeamDetails from "../pages/TeamDetails";
import TeamMember from "../pages/TeamMember";
import Project from "../pages/Project";
import ProjectDetails from "../pages/ProjectDetails";
import Faq from "../pages/Faq";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import BlogStandarad from "../pages/BlogStandarad";
import BlogDetails from "../pages/BlogDetails";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <HomeOne />,
      },
      {
        path: "/hometwo",
        element: <HomeTwo />,
      },
      {
        path: "/homethree",
        element: <HomeThree />,
      },
      {
        path: "/homefour",
        element: <HomeFour />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/service",
        element: <Service />,
      },
      {
        path: "/service-details",
        element: <ServiceDetails />,
      },
      {
        path: "/team",
        element: <TeamMember />,
      },
      {
        path: "/team-details",
        element: <TeamDetails />,
      },
      {
        path: "/project",
        element: <Project />,
      },
      {
        path: "/project-details",
        element: <ProjectDetails />,
      },
      {
        path: "/faq",
        element: <Faq />,
      },
      {
        path: "/blogstandard",
        element: <BlogStandarad />,
      },
      {
        path: "/blog-details",
        element: <BlogDetails />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/*",
        element: <NotFound />,
      },
    ],
  },
]);

export default routes;
