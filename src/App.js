
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from "react";
import { useLocation } from "react-router-dom";


import Home from './pages/Home';
import Header from "./components/Header";
import ProductPage from "./components/ProductPage/ProductPage";

function ScrollToAnchor() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const el = document.getElementById(location.hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth" });
        }, 100); // Pequeno delay para garantir renderização
      }
    }
  }, [location]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToAnchor />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/servico/:productName" element={<ProductPage />} />
      </Routes>
    </Router>
  )
}

export default App;
