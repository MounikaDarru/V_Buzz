import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import InstituteBoarding from "./pages/InstituteBoarding";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/services/Services";
import Events from "./pages/events/Events";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/events" element={<Events />} />
      <Route path="/institute-boarding" element={<InstituteBoarding />} />
    </Routes>
  )
}

export default App;
