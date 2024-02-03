import { atom } from "recoil";

export const userAtom = atom({
  key: "userAtom",
  default: {
    userId: localStorage.getItem("userId"),
    email: localStorage.getItem("email"),
  },
});
