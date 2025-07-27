import { Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import InstituteBoarding from "./pages/InstituteBoarding";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/services/Services";
import Events from "./pages/events/Events";
import EventInfo from "./pages/events/EventInfo";
import Testimonials from "./pages/Testimonials";
import MockInterview from "./pages/services/mock interview/MockInterview";
import Interview from "./pages/services/mock interview/Interview";
import StudentLogin from "./pages/login/StudentLogin";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/services" element={<Services />} />
      <Route path="/services/mock-interviews" element={<MockInterview />} />
      <Route path="/services/mock-interviews/interview" element={<Interview />} />
      <Route path="/events" element={<Events />} />
      <Route path="/event-info" element={<EventInfo />} />
      <Route path="/login/student" element={<StudentLogin />} />
      <Route path="/institute-boarding" element={<InstituteBoarding />} />
      <Route path="/testimonials" element={<Testimonials />} />
    </Routes>
  )
}

export default App;
