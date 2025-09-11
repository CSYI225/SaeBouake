import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
import { useState,useEffect } from "react";
import Accueil from "./Pages/Accueil.jsx"
import Sponsoring from "./Pages/Sponsoring.jsx"
import Programme from "./Pages/Programme.jsx"
import Actu from "./Pages/Actualites.jsx"
import Test from "./Pages/Test.jsx"
import Delegation from "./Pages/Delegation.jsx"
import Visiteur from "./Pages/Visiteur.jsx"
import MediaPresse from "./Pages/MediaPresse.jsx"
import ScrollToTop from "./ScrollToTop.js";
import SponsorPartenaire from "./Pages/SponsorsPartenaire.jsx";


const Layout=()=>{
  return(
    <>
    <ScrollToTop/>
    <Outlet/>
    </>  
  )
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Accueil />
      },
      {
        path: "/Programme",
        element: <Programme />
      },
      {
        path: "/Sponsoring",
        element: <Sponsoring />
      },
      {
        path: "/Actualites",
        element: <Actu />
      },
      {
        path: "/Test",
        element: <Test />
      },
      {
        path: "/Delegation",
        element: <Delegation />
      },
      {
        path: "/Visiteur",
        element: <Visiteur />
      },
      {
        path: "/MediaPresse",
        element: <MediaPresse />
      },
      {
        path: "/SponsorPartenaire",
        element: <SponsorPartenaire />
      }
    ]
  }
]);




function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:5000/api/hello")
      .then(res => res.json())
      .then(data => setMessage(data.message));
  }, []);
  
  return (
    <div>
        <RouterProvider router={router}/>
    </div>
  );
}

export default App;
