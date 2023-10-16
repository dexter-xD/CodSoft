import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Login from "./components/Login";
import Signup from "./components/Signup";
import TopList from "./components/TopList";
import Footer from "./components/Footer";
import AboutSection from "./components/AboutSection";
import Faq from "./components/Faq";
import Testimonial from "./components/Testimonial";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Booking from "./pages/Booking";
import About from "./pages/About";
import CheckOutPage from "./pages/CheckOutPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/getLocationHotel/:location" element={<Booking />} />
          <Route path="/about" element={<About />} />
          <Route path="/checkout/:id" element={<CheckOutPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
