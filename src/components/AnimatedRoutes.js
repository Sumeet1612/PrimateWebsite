import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./Home";
import AboutUs from "./AboutUs";
import Jobs from "./Jobs";
import Services from "./Services";
import Accounting from "../ServicesChildern/Accounting";
import RemoteAssistant from "../ServicesChildern/RemoteAssistant";
import DigitalMarketing from "../ServicesChildern/DigitalMarketing";
import MedicalBilling from "../ServicesChildern/MedicalBilling";
import Logistics from "../ServicesChildern/Logistics";
import ContactUs from "./ContactUs";
import { AnimatePresence } from "framer-motion";

function AnimatedRoutes() {
    const location= useLocation();
  return (
    <AnimatePresence>
    <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/contactus" element={<ContactUs />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/services">
          <Route index element={<Services />} />
          <Route path="accounting" element={<Accounting />} />
          <Route path="remoteassistant" element={<RemoteAssistant />} />
          <Route path="digitalmarketing" element={<DigitalMarketing />} />
          <Route path="medicalbilling" element={<MedicalBilling />} />
          <Route path="logistics" element={<Logistics />} />
        </Route>
      </Routes>
      </AnimatePresence>
    
  )
}

export default AnimatedRoutes;
