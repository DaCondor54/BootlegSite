import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./routes/App";
import CreatePost from "./routes/CreatePost";

const RouteSwitch = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />                
        <Route path="/submit" element={<CreatePost />} />                
      </Routes>
    </BrowserRouter>
  );
};

export default RouteSwitch;