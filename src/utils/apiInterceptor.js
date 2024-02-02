import { POST_newToken } from "@api/sign";
import axios from "axios";
import { getCookie, setCookie } from "./cookie";

const instance = axios.create();

/* 요청 인터셉트 : 헤더에 토큰 추가 */
instance.interceptors.request.use(
  // 요청 설정 받아서 수정 및 검사하는 함수
  async (config) => {
    const accessToken = getCookie(accessToken);

    // TODO: 해당 로직을 넣으므로 withAuth 넣을지 고려해보기
    if (accessToken) {
      config.headers["Authorization"] = `Bearer ${accessToken}`;
    } else {
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

    return response;
  },
  async (error) => {
    if (error.response.status === 401) {
      // access 토큰 만료 시 refresh 토큰 통해 재발급 요청
      const refreshToken = getCookie(refreshToken);

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
          error.config.headers["Authorization"] = `Bearer ${newAccessToken}`;
          return instance.request(error.config);
        } catch (error) {
          // 리프레시 토큰이 만료되었거나, 재발급 요청에 실패한 경우
          window.location.href = "/login"; // 로그인 페이지로 리다이렉트
        }
      } else {
        window.location.href = "/login"; // 토큰이 없으면 로그인 페이지로 리다이렉트
      }
    }

    return Promise.reject(error);
  }
);
