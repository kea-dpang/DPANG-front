import styled from "styled-components";
import DetailShip from "./DetailShip";
import DetailPay from "./DetailPay";
import DetailTableTitle from "../../../../../components/common/HiddenShowBtn";
import { useState } from "react";

const Wrap = styled.div`
  width: 71rem;
  display: flex;
  flex-direction: column;
`;

const Blank = styled.div`
  height: 5rem;
`;

function Table(props) {
  const [shipClick, setShipClick] = useState(true);
  const [payClick, setPayClick] = useState(true);

  const handleShipClick = () => {
    setShipClick(!shipClick);
  };
  const handlePayClick = () => {
    setPayClick(!payClick);
  };

  return (
    <Wrap>
      <Blank />
      <DetailTableTitle
        width="72rem"
        text="배송지 정보"
        handleclick={handleShipClick}
      />
      {shipClick && <DetailShip data={props.data} />}

      <Blank />

      <DetailTableTitle
        width="72rem"
        text="결제 정보"
        handleclick={handlePayClick}
      />
      {payClick && <DetailPay data={props.data} />}
      <Blank />
    </Wrap>
  );
}
export default Table;
