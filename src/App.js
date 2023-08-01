import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ReactGA from "react-ga4";
import Home from './pages/Home'

const TRACKING_ID = "G-XXXXXXXXXX";
ReactGA.initialize(TRACKING_ID)

function App() {
  ReactGA.send({ hitType: "pageview", page: "/my-path", title: "Custom Title" });

  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
