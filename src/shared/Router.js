import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Write from "../pages/Write";
import Main from "../pages/Main";
import Detail from "../pages/Detail";
import Update from "../pages/Update";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/write" element={<Write />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/update/:id" element={<Update />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
