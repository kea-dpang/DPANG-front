import styled from "styled-components";
import DetailShip from "./DetailShip";
import DetailPay from "./DetailPay";
import DetailCancel from "./DetailCancel";
import { useState } from "react";
import DetailTableTitle from "../../../../../../components/common/HiddenShowBtn";

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

  // click 여부에 따라서 박스를 열었다가 닫았다가 하면서 데이터를 보여주었다 안보여주었다가 함

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
