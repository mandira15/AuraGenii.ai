import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./pages/Home.jsx";
import HowItWorks from "./pages/HowItWorks.jsx";
import Gallery from "./pages/Gallery.jsx";
import Tailors from "./pages/Tailors.jsx";
import About from "./pages/About.jsx";
import AuthPage from "./pages/AuthPage.jsx";
import Login from "./pages/Login.jsx";
import Order from "./pages/Order";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<AuthPage/>}/>
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/tailors" element={<Tailors />} />
        <Route path="/about" element={<About />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/order" element={<Order />} />
      </Routes>
      

    </Router>
    
  );
}

export default App;
