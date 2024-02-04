import axios from "axios";

const url = `/api/order`;

export const POST_OrderInfo = async (inputValue) => {
  console.log("주문하기: ", inputValue);
  const res = await axios({
    method: "post",
    url: url,
    headers: {
      "X-DPANG-CLIENT-ID": 1,
    },
    data: {
      deliveryInfo: {
        name: inputValue.name,
        phoneNumber: inputValue.phoneNumber,
        zipCode: inputValue.zipCode,
        address: inputValue.address,
        detailAddress: inputValue.detailAddress,
      },
      deliveryRequest:inputValue.deliveryRequest,
      orderIteminfo: {
        itemId: inputValue.itemId,
        quantity: inputValue.quantity,
      },
      productInfoDto: {
        image: inputValue.image,
        name: inputValue.name,
        price: inputValue.price,
      }
    }
  });
  return res.data;
};



export const GET_Order = async (id) => {
  
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


  export const PUT_Order = async (orderId, inputValue) => {
    console.log("주문상태 수정");
    const response = await axios({
      method: "put",
      url: `${url}/${orderId}`,
      data: {
        orderId: orderId,
        orderDate: inputValue.orderDate,
        imgUrl: inputValue.imgUrl,
        name: inputValue.name,
        price: inputValue.price,
        productQuantity: inputValue.productQuantity,
        orderer: inputValue.orderer,
        orderStatus: "ORDER_RECEIVED",
    },
    });
    return response.data;
  };

  export const GET_OrderList = async (orderId, inputValue) => {
    console.log("주문상세조회");
    const response = await axios({
      method: "get",
      url: `${url}/${orderId}`,
      data: {
        
      }
    })
  }

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