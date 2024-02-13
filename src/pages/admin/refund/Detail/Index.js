import styled from "styled-components";
import * as React from "react";
import { useState, useEffect } from "react";
import "styles/fonts.css";
import Table from "./Table";
import { useParams } from "react-router-dom";
import RefundDetail from "./RefundDetail";
import { GET_refund_detail } from "@api/refund";

const Index = () => {
  const { id } = useParams();
const [refundDetail, setRefundDetail] = useState();


  useEffect(()=>{

    window.scrollTo(0, 0)
    GET_refund_detail(parseInt(id, 10))
    .then((data)=>{
      console.log("성공성공", data)
      setRefundDetail(data.data)
    })
    .catch((error)=>{
      console.log("실패실패", error)
    })


  }, [])

  if(!refundDetail){
    return <></>
  }

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 환불 관리</PageName>
        <PageSubName className="cm-MBold24 col-Navy">
          환불 내역 상세조회
        </PageSubName>

        <InputSection>
          <Table data={refundDetail} />
          <RefundDetail data={refundDetail} />
        </InputSection>
      </Wrap>
    </>
  );
};

export default Index;

const Wrap = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;
const PageName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 7.5rem;
  align-items: center;
`;
const PageSubName = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 7.5rem 0.9375rem 7.5rem;
  align-items: center;
  font-size: 1.5rem;
`;

const InputSection = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 6.25rem 7.5rem;
  flex-direction: column;
  align-items: center;
`;
