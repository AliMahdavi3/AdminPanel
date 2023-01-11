import axios from "axios";
import { useEffect, useState } from "react";
import { getUserService } from "../services/auth";

export const useIsLogin = () => {
  const [isLogin, setisLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const handleCheckLogin = async () => {
    try {
      const res = await getUserService();
      setisLogin(res.status == 200 ? true : false);
      setLoading(false);
    } catch (error) {
      localStorage.removeItem("loginToken");
      setisLogin(false);
      setLoading(false);
    }
  };

  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    if (loginToken) {
      handleCheckLogin()
    } else {
      setisLogin(false);
      setLoading(false);
    }
  }, []);

  return [loading, isLogin];
};
