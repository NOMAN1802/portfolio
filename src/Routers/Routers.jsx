import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../components/Home/Home";
import Skills from "../components/Skills/Skills";
import Projects from "../components/ParticleBg/Projects/Projects";
import Contact from "../components/Contact/Contact";
import Resume from "../components/Resume/Resume";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children: [
      {
        path: "/",
        element:<Home></Home>
        
      },
      {
        path:'about',
        element: <Skills></Skills>
      },
      {
        path:'projects',
        element: <Projects></Projects>
      },
     
      {
        path:'contact',
        element: <Contact></Contact>
      },
      {
        path:'Resume',
        element: <Resume></Resume>
      }
     
    ],
  },
]);                    

export default router;