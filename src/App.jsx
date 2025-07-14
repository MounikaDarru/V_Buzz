import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import InstituteBoarding from "./pages/InstituteBoarding";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/services/Services";
import Events from "./pages/events/Events";
import EventInfo from "./pages/events/EventInfo";
import Testimonials from "./pages/Testimonials";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event-info" element={<EventInfo />} />
      <Route path="/institute-boarding" element={<InstituteBoarding />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  )
}

export default App;
