import { atom } from "recoil";

export const periodAtom = atom({
  key: "periodAtom",
  default: {
    startDate: null,
    endDate: null,
  },
});
