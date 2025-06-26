import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import About from "./pages/About/About";
import NotFound from "./pages/NotFound/NotFound";
import Logement from "./pages/Logement/Logement";

import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/logement/:id" element={<Logement />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
