import heart from "@images/heart.png";
import cart from "@images/cart.svg";
import ship from "@images/ship.svg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ImageButton = styled.img`
  width: 1.3rem;
  height: 1.3rem;
`;
const ImageButtonBox = styled.div`
  width: 4rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function ImageShortCut() {
  const navi = useNavigate();

  return (
    <ImageButtonBox>
      <ImageButton
        src={ship}
        onClick={() => {
          navi("/user/mypage/order");
        }}
      />
      {/* <ImageButton src={heart} onClick={()=>{navi("/user/wishlist")}}/> */}
      <ImageButton
        src={cart}
        onClick={() => {
          navi("/user/cart");
        }}
      />
    </ImageButtonBox>
  );
}

export default ImageShortCut;
