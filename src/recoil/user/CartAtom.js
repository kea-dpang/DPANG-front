import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

export const cartListAtom = atom({
  key: "cartListAtom",
  default: [], // itemId, name, image, price, discountRate, discountPrice, quantity
});

// item.quantity 1 증가
export const increaseCountSelector = selector({
  key: "increaseCountSelector",
  get: ({ get }) => {
    const cartList = get(cartListAtom);
    return cartList;
  },
  set: ({ set }, newItemId) => {
    set(cartListAtom, (oldCartList) =>
      oldCartList.map((item) => {
        if (item.itemId === newItemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
            // discountPrice: item.discountPrice * (item.quantity + 1),
            // price: item.price * (item.quantity + 1),
          };
        }
        return item;
      })
    );
  },
});

// item.quantity 1 감소
export const decreaseCountSelector = selector({
  key: "decreaseCountSelector",
  get: ({ get }) => {
    const cartList = get(cartListAtom);
    return cartList;
  },
  set: ({ set }, newItemId) => {
    set(cartListAtom, (oldCartList) =>
      oldCartList.map((item) => {
        if (item.itemId === newItemId) {
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        }
        return item;
      })
    );
  },
});
