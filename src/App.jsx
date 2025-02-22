import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import NotFound from "./components/NotFound";
import Forgotpassword from "./pages/Forgotpassword";
import Register from "./pages/Register";
import Careeroption from "./pages/Careeroption";
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/forgotpassword" element={<Forgotpassword />} />
        <Route exact path="/register" element={<Register />} />
        <Route path="/careeroption" element={<Careeroption />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
