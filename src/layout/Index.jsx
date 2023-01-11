import React from "react";
import Content from "../pages/Content";
import Sidebar from "./sidebar/Sidebar";
import { Navigate } from "react-router-dom";
import { useIsLogin } from "../hook/AuthHook";

const Index = () => {
  const [loading, isLogin] = useIsLogin();


  const load = document.getElementById("loader");
  const handlLoader = () => {
    load.style.display = "none";
  };


  return (
    <>
      {loading ? (
        <div
          id="loader"
          onLoad={handlLoader}
          className="d-flex justify-content-center align-items-center load"
        >
          <span id="span-loader" className="loader"></span>
        </div>
      ) : isLogin ? (
        <>
          <Content />
          <Sidebar />
        </>
      ) : (
        <Navigate to={"/login"} />
      )}
    </>
  );
};

export default Index;
