import img from "assets/images/tempitemimg.png";

const UserOrderData = [
  {
    id: 0,
    date: "2023.11.13",
    ordernum: 112232,
    status: "결제완료",
    name: "김디팡",
    phone: "010-1111-1111",
    address: "강원도 인제군 북면 미시령로 1261",
    shipmessage: "문 앞에 두고 가주세요",
    item: [
      {
        id: "item1_id",
        img: img,
        name: "한국시리즈 후드 105",
        money: 160000,
        amt: 2,
      },
    ],
  },
  {
    id: 1,
    date: "2023.11.13",
    ordernum: 112232,
    status: "배송중",
    name: "김디팡",
    phone: "010-1111-1111",
    address: "강원도 인제군 북면 미시령로 1261",
    shipmessage: "문 앞에 두고 가주세요",
    item: [
      {
        id: "item2_id",
        img: img,
        name: "한국시리즈 후드 105",
        money: 160000,
        amt: 2,
      },
      {
        id: "item2_id",
        img: img,
        name: "한국시리즈 후드 105",
        money: 160000,
        amt: 2,
      },
    ],
  },
  {
    id: "2",
    date: "2023.11.13",
    ordernum: 112232,
    status: "배송완료",
    name: "김디팡",
    phone: "010-1111-1111",
    address: "강원도 인제군 북면 미시령로 1261",
    shipmessage: "문 앞에 두고 가주세요",
    item: [
      {
        id: "item2_id",
        img: img,
        name: "한국시리즈 후드 105",
        money: 160000,
        amt: 2,
      },
      {
        id: "item2_id",
        img: img,
        name: "한국시리즈 후드 105",
        money: 160000,
        amt: 2,
      },
      {
        id: "item2_id",
        img: img,
        name: "한국시리즈 후드 105",
        money: 160000,
        amt: 2,
      },
    ],
  },
];

export default UserOrderData;
