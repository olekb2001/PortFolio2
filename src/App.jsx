import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CssFrameworks from "./pages/CssFrameworks";
import JsFrameworks from "./pages/JsFrameworks";
import SemesterProject from "./pages/SemesterProject";
import ScrollTop from "./components/ScrollTop";
import Footer from "./components/Footer";
import About from "./pages/About";

function App() {
  return (
    <Router>
      <Navbar />
      <ScrollTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css-frameworks" element={<CssFrameworks />} />
        <Route path="/js-frameworks" element={<JsFrameworks />} />
        <Route path="/semester-project" element={<SemesterProject />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer />
    </Router>
  );
}
export default App;
