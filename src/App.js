import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import TPO from "./components/TPO";
import WhyRecruit from "./components/WhyRecruit";
import Messages from "./components/Messages";
import Achievements from "./components/Achievements";
import PlacementProcess from "./components/PlacementProcess";
import PlacementStatistics from "./components/PlacementStatistics";
import PastRecruiters from "./components/PastRecruiters";
import Contact from "./components/Contact";
import "./assets/styles.css";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tpo" element={<TPO />} />
        <Route path="/why-recruit" element={<WhyRecruit />} />
        <Route path="/messages" element={<Messages />} />
        <Route path="/achievements" element={<Achievements />} />
        <Route path="/placement-process" element={<PlacementProcess />} />
        <Route path="/placement-statistics" element={<PlacementStatistics />} />
        <Route path="/past-recruiters" element={<PastRecruiters />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
