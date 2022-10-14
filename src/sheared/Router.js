import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailList from "../DetailComponent/DetailList";
import Web from "../pages/Web";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/detail" element={<DetailList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
