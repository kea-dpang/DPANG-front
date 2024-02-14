import styled from "styled-components";
import * as React from "react";
import { useState } from "react";
// import "../../../../styles/fonts.css";
import TableRow from "./TableRow";


const DetailTable = (props) => {

  return (
 
    <Wrap>
      <TableBox>
        <Tabledetail className="cm-SBold16">
          <Col width="11rem">날짜 | 주문번호</Col>
          <Col width="11rem">상품번호</Col>
          <Col width="11rem">상태</Col>
          <Col width="27rem">상품명</Col>
          <Col width="11rem">상품금액/수량</Col>
        </Tabledetail>
        <TableRow data={props.data} />
      </TableBox>
    </Wrap>

  );
};

export default DetailTable;


const Wrap = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 6.25rem 7.5rem;
  flex-direction: column;
  align-items: center;
`;
const TableBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 1rem 7.5rem;
`;

const Tabledetail = styled.div`
  width: 73.9375rem;
  height: 4rem;
  background-color: var(--navy);
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Col = styled.div`
  color: white;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => props.width};
`;