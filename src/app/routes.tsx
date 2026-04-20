import { createBrowserRouter } from "react-router";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { FPMASBL } from "./pages/FPMASBL";
import { FPMSA } from "./pages/FPMSA";
import { Services } from "./pages/Services";
import { Impact } from "./pages/Impact";
import { Publications } from "./pages/Publications";
import { About } from "./pages/About";
import { Careers } from "./pages/Careers";
import { Contact } from "./pages/Contact";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: Home },
      { path: "fpm-sa", Component: FPMSA },
      { path: "fpm-asbl", Component: FPMASBL },
      { path: "services", Component: Services },
      { path: "impact", Component: Impact },
      { path: "publications", Component: Publications },
      { path: "about", Component: About },
      { path: "careers", Component: Careers },
      { path: "contact", Component: Contact },
    ],
  },
]);