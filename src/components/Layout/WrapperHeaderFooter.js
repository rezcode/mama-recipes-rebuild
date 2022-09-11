import React from "react";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router";
import Footer from "../Footer/Footer";

const Wrapper = () => {
  return (
    <>
      <Navbar />
      <div style={{ minHeight: "84vh" }}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Wrapper;
