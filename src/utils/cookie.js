import Cookies from "js-cookie";

/* 쿠키 저장 */
export const setCookie = (key, value, options) => {
  Cookies.set(key, value, options);
};
/* 쿠키 값 가져오기 */
export const getCookie = (key) => {
  return Cookies.get(key);
};
/* 쿠키 삭제 */
export const removeCookie = (key, options) => {
  Cookies.remove(key, options);
};
