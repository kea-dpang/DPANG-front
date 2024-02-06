import DetailRefund from "pages/user/myPage/Cancel/Detail/Refund/DetailRefund";
import styled from "styled-components";
import DetailHeader from "components/common/HiddenShowBtn";
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
  const [clickState, setClickState] = useState(true);

  const handleclick = () => {
    setClickState(!clickState);
  };

  return (
    <Wrap>
      <Blank />
      <DetailHeader
        width="71rem"
        text="결제 상세 내역"
        handleclick={handleclick}
      />
      {clickState && <DetailRefund data={props.data} />}
    </Wrap>
  );
}
export default Table;
