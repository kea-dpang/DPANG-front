import { POST_newToken } from "@api/sign";
import axios from "axios";
import { getCookie, setCookie } from "./cookie";

const instance = axios.create();

/* 요청 인터셉트 : 헤더에 토큰 추가 */
instance.interceptors.request.use(
  // 요청 설정 받아서 수정 및 검사하는 함수

  async (config) => {
    console.log("요청 인터셉트");
    const accessToken = getCookie("accessToken");
    // console.log("dfsfsd", accessToken);

    // TODO: 해당 로직을 넣으므로 withAuth 넣을지 고려해보기
    if (accessToken) {
      console.log(accessToken);
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
      alert("accessToken이 없습니다.");
      window.location.href = "/login"; // 토큰이 없으면 로그인 페이지로 리다이렉트
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/* 응답 인터셉트 */
instance.interceptors.response.use(
  (response) => {
    // if (response.status === 404) {
    //   console.log("404 페이지로 넘어가야 함!");
    // }
    console.log("응답 인터셉트");
    return response;
  },
  async (error) => {
    console.log("응답 인터셉트 error", error);

    if (error.response.status === 403) {
      alert("관리자 권한이 없습니다. 로그인 페이지로 이동합니다.");
      window.location.href = "/login"; // 로그인 페이지로 리다이렉트
    }
    if (error.response.status === 401) {
      console.log("401에러 남");
      // access 토큰 만료 시 refresh 토큰 통해 재발급 요청
      const refreshToken = getCookie("refreshToken");

      if (refreshToken) {
        try {
          // 토큰 재발급 요청
          const newToken = await POST_newToken(refreshToken);

          // 쿠키에 새로 발급된 토큰 저장하기
          setCookie("accessToken", newToken.accessToken, {
            expires: 7,
            path: "/",
          });
          setCookie("refreshToken", newToken.refreshToken, {
            expires: 7,
            path: "/",
          });

          // 오류가 발생한 요청 재시도
          error.config.headers["Authorization"] = `Bearer ${newToken}`;
          return instance.request(error.config);
        } catch (error) {
          // 리프레시 토큰이 만료되었거나, 재발급 요청에 실패한 경우
          alert("refreshToken이 만료되었습니다.");
          window.location.href = "/login"; // 로그인 페이지로 리다이렉트
        }
      } else {
        alert("accessToken은 만료되었고, refreshToken이 없습니다.");
        window.location.href = "/login"; // 토큰이 없으면 로그인 페이지로 리다이렉트
      }
    }

    return Promise.reject(error);
  }
);

// export default axios;
export default instance;
