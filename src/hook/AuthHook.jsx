import axios from "axios";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { receiveUsersResponse } from "../redux/user/actions";
import { getUserService } from "../services/auth";

export const useIsLogin = () => {
  const [isLogin, setisLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  const handleCheckLogin = async () => {
      try {
        const res = await getUserService();
        setisLogin(res.status == 200 ? true : false);
        setLoading(false);
        const user = res.data;
        user.full_name = `${user.first_name || ""} ${user.last_name || ""}`.trim()

        dispatch(receiveUsersResponse(user));
      } catch (error) {
        localStorage.removeItem("loginToken");
        setisLogin(false);
        setLoading(false);
      }
  };

  useEffect(() => {
    const loginToken = JSON.parse(localStorage.getItem("loginToken"));
    if (loginToken) {
      handleCheckLogin();
    } else {
      setisLogin(false);
      setLoading(false);
    }
  }, []);

  return [loading, isLogin];
};
