import styled from "styled-components";
import Table from "./Table";
import { useState } from "react";
import { useNavigate } from 'react-router-dom'

const Container = styled.div`
  width: 72rem;
  min-height: calc(100vh - 30rem);
`;

const Header = styled.div`
  width: 72rem;
  height: 7rem;
  background-color: white;
  display: flex;
  align-items: center;
  font-size: 30px;
  color: #043277;
  border-bottom: 1px #043277 solid;
`;


const TableBox = styled.div`
  height: 43rem;
  background-color: white;
`;
const DetailHeader = styled.div`

width: 72rem;
height: 5rem;
background-color: white;
display: flex;
align-items: end;

`


const NavBox = styled.div`

display: flex;

`

function ReviewBox() {

  const navi = useNavigate();

  return (
    <Container>
      <Header className="cm-MBold24">취소/환불 내역 확인</Header>
      <DetailHeader className="cm-SRegular16">상세 내역</DetailHeader>
      <NavBox className="cm-SBold18">
      </NavBox>
      <TableBox>
        <Table />
      </TableBox>
    </Container>
  );
}
export default ReviewBox;
