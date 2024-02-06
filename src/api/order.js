import axios from "axios";

const url = `/api/order`;

export const POST_OrderInfo = async (inputValue) => {
  console.log("주문하기: ", inputValue);
  const res = await axios({
    method: "post",
    url: url,

    data: {

        name: inputValue.name || undefined,
        phoneNumber: inputValue.phoneNumber || undefined,
        zipCode: inputValue.zipCode || undefined,
        address: inputValue.address || undefined,
        detailAddress: inputValue.detailAddress || undefined,
        deliveryRequest:inputValue.deliveryRequest || undefined,
        itemId: inputValue.itemId,
        quantity: inputValue.quantity,

    }
  });
  return res.data;
};



export const GET_Order = async () => {
  
    console.log("get orderlist");
    const res = await axios({
      method: "get",
      url: `${url}/list`,
      params: {
        page: 0,
        size: 20,
        sort: "",
      },
    });
    console.log("주문내역 result : ", res.data);
    return res.data;
  };


  export const PUT_change_status = async (orderId, inputValue) => {
    const res = await axios({
      method: "put",
      url: `${url}/${orderId}`,
    });
    return res.data;
  };


  export const GET_orderlist = async (inputValue) =>{

    console.log("서버로 전달할 데이터는", inputValue)

    const res = await axios({
      method: 'get', 
      url: `${url}/list`,
      
      data: {
        startDate: inputValue.startDate || undefined, 
        endDate: inputValue.endDate || undefined,
        orderStatus: inputValue.status || undefined, 
        page: inputValue.page || undefined, 
        size: inputValue.size || undefined, 
        sort: inputValue.sort || undefined,  

      }

    })

    return res.data;

  }

  export const GET_order_detail = async(orderId) =>{


    const res = await axios({
      method: 'get', 
      url: `${url}/${orderId}`

    })

    return res.data;

  }