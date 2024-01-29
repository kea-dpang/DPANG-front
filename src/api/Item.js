import axios from "axios";
// 관리자 - 상품 등록
export const POST_Item = async (inputValue) => {
  console.log("상품 등록");
  const res = await axios({
    method: "post",
    url: url,
    data: {
      sellerId: inputValue.sellerId,
      itemName: inputValue.itemName,
      category: inputValue.category,
      subCategory: inputValue.subCategory,
      itemPrice: inputValue.itemPrice,
      discountPrice: inputValue.discountPrice,
      stockQuantity: inputValue.stockQuantity,
      minStock: inputValue.minStock,
      maxStock: inputValue.maxStock,
      itemImage: inputValue.itemImage,
      images: inputValue.images,
    },
  });
  return res.data;
};
