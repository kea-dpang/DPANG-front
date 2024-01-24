import img from "../images/tempitemimg.png";

const List = [
  {
    id: 0,
    date: "2023.11.13",
    ordernum: 112232,
    status: "결제완료",
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
    id: "item2_id",
    date: "2023.11.13",
    ordernum: 112232,
    status: "배송완료",
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

export default List;
