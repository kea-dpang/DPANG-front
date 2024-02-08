import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

/* [atom] 장바구니 list */
export const cartListAtom = atom({
  key: "cartListAtom",
  default: [], // itemId, name, image, price, discountRate, discountPrice, quantity
});

/* [atom] 체크된 아이템의 itemId를 저장 */
export const checkedItemsAtom = atom({
  key: "checkedItemsAtom",
  default: selector({
    // 초기값: 장바구니 리스트 체크된 값
    key: "checkedItemsDefault",
    get: ({ get }) => {
      const cartList = get(cartListAtom);
      return cartList.map((item) => item.itemId);
    },
  }),
});

/* item.quantity 1 증가 */
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

/* item.quantity 1 감소 */
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

/* 체크된 아이템의 itemId를 저장하는 selector */
export const checkedItemsSelector = selector({
  key: "checkedItemsSelector",
  get: ({ get }) => {
    const checkedItems = get(checkedItemsAtom);
    return checkedItems;
  },
  set: ({ set }, newItemId) => {
    set(checkedItemsAtom, (oldCheckedItems) => {
      // 이미 체크된 아이템이면 체크 해제 (배열에서 제거)
      if (oldCheckedItems.includes(newItemId)) {
        return oldCheckedItems.filter((itemId) => itemId !== newItemId);
      }
      // 아니면 체크 (배열에 추가)
      else {
        return [...oldCheckedItems, newItemId];
      }
    });
  },
});

/* 체크된 아이템의 총 가격 */
export const totalAmountSelector = selector({
  key: "totalAmountSelector",
  get: ({ get }) => {
    const cartList = get(cartListAtom);
    const checkedItems = get(checkedItemsAtom);

    return cartList.reduce((acc, item) => {
      // acc: 지금까지 계산된 총합 item: 현재 아이템
      // 체크된 아이템만 계산에 포함
      if (checkedItems.includes(item.itemId)) {
        // discountRate가 0인 아이템은 가격이 price*quantity
        if (item.discountRate === 0) {
          return acc + item.price * item.quantity;
        }
        // discountRate가 0이 아닌 아이템은 discountPrice*quantity
        else {
          return acc + item.discountPrice * item.quantity;
        }
      }
      // 체크되지 않은 아이템은 계산에서 제외
      else {
        return acc;
      }
    }, 0);
  },
});
