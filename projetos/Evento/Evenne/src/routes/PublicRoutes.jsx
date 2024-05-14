import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Cadastro from "../pages/Cadastro/Cadastro";
import Login from "../pages/Login/Login";
import RecipeReviewCard from "../pages/Carrinho";

const PublicRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Cadastro />} />
        <Route path="/Carrinho" element={<RecipeReviewCard />} />
      </Routes>
    </BrowserRouter>
  );
};

export default PublicRoutes;
