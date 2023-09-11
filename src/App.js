import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";

import AboutUs from "./components/AboutUs";
import Jobs from "./components/Jobs";
import Services from "./components/Services";
import ContactUs from "./components/ContactUs";
import Home from "./components/Home";

import "./App.css";
import Accounting from "./ServicesChildern/Accounting";
import MedicalBilling from "./ServicesChildern/MedicalBilling";
import DigitalMarketing from "./ServicesChildern/DigitalMarketing";
import RemoteAssistant from "./ServicesChildern/RemoteAssistant";
import Logistics from "./ServicesChildern/Logistics";

const router = createBrowserRouter([
  {
    path: "",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      { path: "", element: <Home /> },
      {
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        path: "jobs",
        element: <Jobs />,
      },
      {
        path: "services",
        element: <Outlet />,
        children: [
          { path: "", element: <Services /> },
          {
            path: "accounting",
            element: <Accounting />,
          },
          {
            path: "logistics",
            element: <Logistics />,
          },
          {
            path: "medicalbilling",
            element: <MedicalBilling />,
          },
          {
            path: "digitalmarketing",
            element: <DigitalMarketing />,
          },
          {
            path: "remoteassistant",
            element: <RemoteAssistant />,
          },
        ],
      },
      {
        path: "contactus",
        element: <ContactUs />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
