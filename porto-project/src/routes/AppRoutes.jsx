import MainLayout from "../components/layouts/MainLayout";
import AboutPage from "../pages/AboutPage";
import CertificatePage from "../pages/CertificatePage";
import HomePage from "../pages/HomePage";
import NotFound from "../pages/NotFound"

const routes = [
  {
    name: "main",
    path: "/",
    Component: MainLayout,
    key: "main",
    routes: [
      {
        key: "home",
        name: "home",
        path: "/",
        index: true,
        requireAuth: false,
        Component: HomePage,
      },
      {
        key: "about",
        name: "about",
        path: "/about",
        Component: AboutPage,
      },
      {
        key: "certificate",
        name: "certificate",
        path: "/certificate",
        Component: CertificatePage,
      },
    ],
  },
  {
    name: "404",
    path: "*",
    Component: NotFound,
    key: "404",
  },
];

export default routes;