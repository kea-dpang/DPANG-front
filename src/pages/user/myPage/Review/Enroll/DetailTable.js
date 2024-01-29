import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import MyPageBodyHeader from "../../../../../components/common/MyPageBodyHeader";

function TableRow(props) {
  const navi = useNavigate();

  const data = props.data;

  return (
    <>
      <MyPageBodyHeader header="리뷰 등록" />

    </>
  );
}

const Row = styled.div`
  width: 72rem;
  border-bottom: 1px black solid;
  display: flex;
  font-size: 14px;
`;

const Col = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Column = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export default TableRow;
