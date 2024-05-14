import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Compra from "../pages/Compra";
import RecipeReviewCard from "../pages/Carrinho/";
const PrivateRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Compra" element={<Compra />} />
        <Route path="/Carrinho" element={<RecipeReviewCard />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};

export default PrivateRoutes;
