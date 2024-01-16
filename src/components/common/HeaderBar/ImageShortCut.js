import heart from "../../../assets/images/heart.png";
import cart from "../../../assets/images/cart.svg"
import ship from '../../../assets/images/ship.svg'
import styled from "styled-components";

const ImageButton = styled.img`
  width: 1.3rem;
  height: 1.3rem;

`;
const ImageButtonBox = styled.div`
  width: 6rem;
  height: 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

function ImageShortCut() {
  return (
    <ImageButtonBox>
      <ImageButton src={ship} />
      <ImageButton src={heart} />
      <ImageButton src={cart} />
    </ImageButtonBox>
  );
}

export default ImageShortCut;
