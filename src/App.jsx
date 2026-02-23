import "./styles/global.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import CssFrameworks from "./pages/CssFrameworks";
import JsFrameworks from "./pages/JsFrameworks";
import SemesterProject from "./pages/SemesterProject";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/css-frameworks" element={<CssFrameworks />} />
        <Route path="/js-frameworks" element={<JsFrameworks />} />
        <Route path="/semester-project" element={<SemesterProject />} />
      </Routes>
    </Router>
  );
}
export default App;
