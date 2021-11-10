import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Catalog from "./pages/Catalog";
import Details from "./pages/Details";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Catalog/>}/>
        <Route path="details/:carModel" element={<Details/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
