import React from "react";
import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import About from "./pages/about/About";
import Home from "./pages/home/Home";
import FichLogement from "./pages/logement/FichLogment";
import NoPage from "./pages/error/NoPage";

const App = () => {
  return (
    <HashRouter>
       <Routes>
        <Route element={<Navigate replace to="/accueil" />} path="/" />
        <Route path="/accueil" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/logement/:id" element={<FichLogement />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
    </HashRouter>
     
   
  );
};

export default App;
