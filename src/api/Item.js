import axios from "axios";
const url = "/api/items";
// 관리자 - 상품 등록
export const POST_Item = async (inputValue) => {
  console.log("상품 등록");
  const res = await axios({
    method: "post",
    url: url,
    data: {
      sellerId: "8",
      itemName: inputValue.itemName,
      category: "FASHION",
      subCategory: "WOMEN_CLOTHES",
      itemPrice: inputValue.itemPrice,
      stockQuantity: inputValue.stockQuantity,
      itemImage: inputValue.itemImage,
      images: [inputValue.images],
    },
  });
  return res.data;
};
