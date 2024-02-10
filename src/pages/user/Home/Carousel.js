import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Item from "@components/ProductCard/Index";
import styled from "styled-components";
import { useState, useEffect } from "react";
import { GET_ItemFilterListUser, GET_HotItemList } from "@api/Item";
import ItemData from "@data/user/ItemDetailData";
import { ReactComponent as Arrowcircle } from "@images/arrowcircle.svg";

const Carousel = (props) => {
  console.log("Item data: ", ItemData);
  // 아이템 리스트
  const [itemList, setItemList] = useState([]);
  const [filterData, setFilterData] = useState({
    category: null,
    subCategory: null,
    minPrice: null,
    maxPrice: null,
    sellerId: props.sellerId,
    keyword: null,
  });

  const GetEventItemList = () => {
    GET_ItemFilterListUser(
      filterData.category,
      filterData.subCategory,
      filterData.minPrice,
      filterData.maxPrice,
      filterData.sellerId,
      filterData.keyword,
      0,
      20
    )
      .then((data) => {
        console.log(
          "넘겨받은 이벤트 아이템 리스트 데이터 : ",
          data.data.content
        );
        setItemList(data.data.content); // API 응답으로 받은 데이터를 상태에 저장
      })
      .catch((error) => {
        // console.error("아이템 리스트 가져오기 실패", error);
      });
  };
  const GetHotItemList = () => {
    GET_HotItemList()
      .then((data) => {
        console.log("넘겨받은 핫 아이템 리스트 데이터 : ", data.data);
        setItemList(data.data); // API 응답으로 받은 데이터를 상태에 저장
      })
      .catch((error) => {
        // console.error("아이템 리스트 가져오기 실패", error);
      });
  };
  useEffect(() => {
    if (props.filter === "event") {
      GetEventItemList();
    } else {
      GetHotItemList();
    }
  }, []);

  useEffect(() => {
    console.log("진짜 아이템 리스트", itemList);
  }, [itemList]);

  function PrevArrow(props) {
    const { onClick } = props;
    return (
      <Arrow className="left" onClick={onClick}>
        <Arrowcircle style={{ transform: "scaleX(-1)" }} />
      </Arrow>
    );
  }

  function NextArrow(props) {
    const { onClick } = props;
    return (
      <Arrow className="right" onClick={onClick}>
        <Arrowcircle />
      </Arrow>
    );
  }

  var settings = {
    dots: true, // 캐러셀 밑에 ... 을 표시할지
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 500, // 속도
    slidesToShow: 4, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 4, // 한 번에 넘어가는 슬라이드 개수
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <StyledSlider {...settings}>
        {itemList.map((item) => (
          <Item key={item.id} value={item} />
        ))}
      </StyledSlider>
    </>
  );
};

export default Carousel;

const StyledSlider = styled(Slider)`
  width: 100%;
`;
const Arrow = styled.p`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: var(--black);
  width: 3rem;
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  z-index: 1;

  &.left {
    left: -34px;
  }
  &.right {
    right: -34px;
  }
`;
