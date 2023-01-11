import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useIsLogin } from "../../hook/AuthHook";
import Login from "../../pages/auth/Login";

const AuthLayout = () => {
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
      ) : !isLogin ? (
        <div>
          <Routes>
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      ) : (
        <Navigate to={"/"} />
      )}
    </>
  );
};

export default AuthLayout;
