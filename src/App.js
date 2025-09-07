import Nav from "./components/Nav";
import Home from "./pages/Home";
import ReactDOM from "react-dom";
import './index.css';
import Footer from "./components/Footer";
import React from 'react';
import reportWevVitals from './reportWebVitals';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faCartShopping, faX, faBoltLightning, faBookOpen, faTags, faStar, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

library.add(faBars, faCartShopping, faX, faBoltLightning, faBookOpen, faTags, faStar, faStarHalfStroke);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
