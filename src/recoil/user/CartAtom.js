import { atom, selector, useRecoilState, useRecoilValue } from "recoil";
import { v1 } from "uuid";

/* [atom] 장바구니 list */
export const cartListAtom = atom({
  key: `cartListAtom/${v1()}`,
  default: [], // itemId, name, image, price, discountRate, discountPrice, quantity
});

/* [atom] 체크된 아이템의 itemId를 저장 */
export const checkedItemsAtom = atom({
  key: `checkedItemsAtom/${v1()}`,
  // default: selector({
  //   // 초기값: 장바구니 리스트 체크된 값
  //   key: "checkedItemsDefault",
  //   get: ({ get }) => {
  //     const cartList = get(cartListAtom);
  //     return cartList.map((item) => item.itemId);
  //   },
  // }),
  default: selector({
    // 초기값: 장바구니 리스트의 전체 아이템 정보
    key: "checkedItemsDefault",
    get: ({ get }) => {
      const cartList = get(cartListAtom);
      return cartList; // 전체 아이템 정보를 반환합니다.
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
  set: ({ get, set }, newItemId) => {
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
    // checkedItemsAtom도 업데이트
    const oldCheckedItems = get(checkedItemsAtom);
    set(
      checkedItemsAtom,
      oldCheckedItems.map((item) => {
        if (item.itemId === newItemId) {
          return {
            ...item,
            quantity: item.quantity + 1,
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
  set: ({ get, set }, newItemId) => {
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
    // checkedItemsAtom도 업데이트
    const oldCheckedItems = get(checkedItemsAtom);
    set(
      checkedItemsAtom,
      oldCheckedItems.map((item) => {
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
  set: ({ set }, newItem) => {
    set(checkedItemsAtom, (oldCheckedItems) => {
      // 이미 체크된 아이템이면 체크 해제 (배열에서 제거)
      if (oldCheckedItems.some((item) => item.itemId === newItem.itemId)) {
        return oldCheckedItems.filter((item) => item.itemId !== newItem.itemId);
      }
      // 아니면 체크 (배열에 추가)
      else {
        return [...oldCheckedItems, newItem];
      }
    });
  },
});

/* 체크된 아이템의 총 가격 */
export const totalAmountSelector = selector({
  key: `totalAmountSelector/${v1()}`,
  get: ({ get }) => {
    const checkedItems = get(checkedItemsAtom);

    return checkedItems.reduce((acc, item) => {
      // acc: 지금까지 계산된 총합 item: 현재 아이템
      // 체크된 아이템만 계산에 포함

      // discountRate가 0인 아이템은 가격이 price*quantity
      if (item.discountRate === 0) {
        return acc + item.price * item.quantity;
      }
      // discountRate가 0이 아닌 아이템은 discountPrice*quantity
      else {
        return (
          acc +
          (item.price - (item.price * item.discountRate) / 100) * item.quantity
        );
        // return (
        //   acc + (item.price - item.price * item.discountRate) * item.quantity
        // );
      }
    }, 0);
  },
});

/* (주문) 체크된 아이템 정보 */
// export const orderCartSelector = selector({
//   key: "orderCartSelector",
//   get: ({ get }) => {
//     const cartList = get(cartListAtom);
//     // const checkedItems = get(checkedItemsAtom);
//     // const checkedItems = JSON.parse(localStorage.getItem("orderCart"));
//     // const checkedItems = JSON.parse(localStorage.getItem("orderIds") || "[]");
//     let checkedItems = localStorage.getItem("orderIds");

//     // checkedItems가 null이거나 콤마로 구분된 문자열이 아닌 경우 빈 배열을 사용
//     if (checkedItems) {
//       console.log(checkedItems);
//       checkedItems = checkedItems.split(",").map(Number);
//     } else {
//       checkedItems = [];
//     }
//     return cartList.filter((item) => checkedItems.includes(item.itemId));
//   },
// });
