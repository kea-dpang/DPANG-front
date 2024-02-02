import React, { useEffect } from "react";
import { getCookie } from "@utils/cookie";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    const navigate = useNavigate();
    const accessToken = getCookie("accessToken");

    useEffect(() => {
      if (!accessToken) {
        // 로그인 페이지로 이동
        navigate("/login");
      }
    }, [accessToken, navigate]);

    // 쿠키가 있으면 원래 컴포넌트를 렌더링
    return accessToken ? <WrappedComponent {...props} /> : null;
  };
};

export default withAuth;
