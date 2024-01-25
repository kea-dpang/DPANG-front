import styled from "styled-components";
import DetailShip from "./DetailShip";
import DetailPay from "./DetailPay";
import DetailCancel from "./DetailCancel";
import { useState } from "react";
import DetailTableTitle from "../../../../../../components/utils/DetailTable/DetailTableTitle";

const Wrap = styled.div`
  width: 71rem;
  display: flex;
  flex-direction: column;
`;

const Blank = styled.div`
  height: 5rem;
`;

function Table(props) {
  const [shipClick, setShipClick] = useState(false);
  const [payClick, setPayClick] = useState(false);
  const [cancelClick, setCancelClick] = useState(false);

  const handleShip = () => {
    setShipClick(!shipClick);
  };

  const handlePay = () => {
    setPayClick(!payClick);
  };

  const handlecancel = () => {
    setCancelClick(!cancelClick);
  };

  return (
    <Wrap>
      <Blank />
      <DetailTableTitle
        width="72rem"
        text="회수처 정보"
        handleclick={handleShip}
      />
      {shipClick && <DetailShip data={props.data} />}
      <Blank />
      <DetailTableTitle
        width="72rem"
        text="결제 정보"
        handleclick={handlePay}
      />
      {payClick && <DetailPay data={props.data} />}
      <Blank />
      <DetailTableTitle
        width="72rem"
        text="취소 상세 정보"
        handleclick={handlecancel}
      />
      {cancelClick && <DetailCancel data={props.data} />}
      <Blank />
    </Wrap>
  );
}
export default Table;
