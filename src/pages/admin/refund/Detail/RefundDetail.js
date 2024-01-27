import styled from "styled-components";
import DetailTableTitle from "../../../../components/common/HiddenShowBtn";
import DetailRefund from "./DetailRefund";
import DetailShip from "./DetailShip";
import DetailPayment from "./DetailPayment";
import { useState } from "react";

function RefundDetail(props) {
  const [refundClick, setRefundClick] = useState(false);
  const [shipClick, setShipclick] = useState(false);
  const [payClick, setPayClick] = useState(false);

  const handleRefundClick = () => {
    setRefundClick(!refundClick);
  };

  const handleShipClick = () => {
    setShipclick(!shipClick);
  };

  const handlePayClick = () => {
    setPayClick(!payClick);
  };

  const data = props.data
  return (
    <Container>
      <DetailTableTitle
        text="환불 상세 정보"
        width="73.9375rem"
        handleclick={handleRefundClick}
      />

      {refundClick && <DetailRefund data={data} />}

      <Blank height="3rem" />
      <DetailTableTitle
        text="회수처 정보"
        width="73.9375rem"
        handleclick={handleShipClick}
      />
      {shipClick && <DetailShip data={data} />}

      <Blank height="3rem" />
      <DetailTableTitle
        text="결제정보"
        width="73.9375rem"
        handleclick={handlePayClick}
      />
      {payClick && <DetailPayment data={data} />}

      <Blank height="10rem" />
    </Container>
  );
}

const Container = styled.div`
  width: 73.9375rem;
`;

const Blank = styled.div`
  height: ${(props) => props.height};
`;

export default RefundDetail;
