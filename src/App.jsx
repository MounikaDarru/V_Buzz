import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import InstituteBoarding from "./pages/InstituteBoarding";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/institute-boarding" element={<InstituteBoarding />} />
    </Routes>
  )
}

export default App;
