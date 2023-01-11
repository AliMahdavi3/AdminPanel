import axios from "axios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { logoutService } from "../../services/auth";
import { Alert } from "../../utils/Alert";

const Logout = () => {
  const load = document.getElementById("loader");
  const handlLoader = () => {
    load.style.display = "none";
  };

  const [loading, setLoading] = useState(true);
  const handleLogout = async () => {
    try {
      const res = await logoutService();
      if (res.status == 200) {
        localStorage.removeItem("loginToken");
        setLoading(false);
      } else {
        Alert("متاسفم...!", res.data.message, "error");
      }
    } catch (error) {
      setLoading(false);
      // Alert("متاسفم...!", "مشکلی از سمت سرور رخ داده است", "error");
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

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
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default Logout;
