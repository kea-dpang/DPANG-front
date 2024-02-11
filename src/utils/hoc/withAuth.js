import React, { useEffect } from "react";
import { getCookie } from "@utils/cookie";
import { useNavigate } from "react-router-dom";

const withAuth = (WrappedComponent) => {
  return (props) => {
    console.log("withAuth 통과");
    // const navigate = useNavigate();
    const accessToken = getCookie("accessToken");
    const userId = localStorage.getItem("userId");
    const role = localStorage.getItem("role");

    useEffect(() => {
      console.log("withAuth.js");
      if (!accessToken || !userId || !role) {
        // 로그인 페이지로 이동
        // navigate("/login");
        window.location.href = "/login";
      } else {
        // accessToken 쿠키가 만료되지 않았을 시, 자동로그인 api를 연동시켜야 함.
      }
    }, [accessToken, userId, role]);

    // 쿠키가 있으면 원래 컴포넌트를 렌더링
    // return accessToken ? <WrappedComponent {...props} /> : null;
    return <WrappedComponent {...props} />;
    // return () => <WrappedComponent {...props} />;
  };
};

export default withAuth;
