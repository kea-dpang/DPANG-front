import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Item from "@components/ProductCard/Index";
import itemList from "@data/user/ItemData";
import styled from "styled-components";

const Carousel = () => {
  var settings = {
    dots: true, // 캐러셀 밑에 ... 을 표시할지
    infinite: true, // 슬라이드가 끝까지 가면 다시 처음으로 반복
    speed: 3000, // 속도
    slidesToShow: 4, // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 4, // 한 번에 넘어가는 슬라이드 개수
    arrow: true,
  };
  return (
    <>
      <StyledSlider {...settings}>
        {itemList.map((item) => (
          <Item key={item.itemId} value={item} />
        ))}
      </StyledSlider>
    </>
  );
};

export default Carousel;

const StyledSlider = styled(Slider)`
  width: 100%;
`;
