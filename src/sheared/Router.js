import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Write from "../pages/MainComponent/Write";
import Web from "../pages/Web";
import Detail from "../pages/DetailComponent/Detail";
import Update from "../pages/MainComponent/Update";
import Test from "../Test";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Web />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
