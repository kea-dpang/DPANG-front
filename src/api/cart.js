//cart.js
import axios from "axios";

const url = "/api/carts";

//장바구니 목록 조회
export const GET_CartList = async () => {
    console.log("장바구니 목록");
    const res = await axios({
        method: "get",
        url: url,
        params: {
            page: 0,
            size: 20,
            sort: "",
          },
        });

        return res.data;
};

//장바구니 목록 삭제
export const DELETE_CartItem = async (itemId) => {

    console.log("장바구니목록 삭제", itemId);
    const response = await axios({
        method: "delete",
        url: `${url}/${itemId}`
    });
    return response.data;
};