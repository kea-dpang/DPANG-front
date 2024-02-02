import styled from "styled-components";
import * as React from "react";
import DetailOrder from "./DetailOrder";
import { useState } from "react";
import { useParams } from "react-router-dom";
import Data from "@data/admin/AdminOrderData";
import DetailTable from "./DetailTable";

const Index = () => {

    const { id } = useParams();

    const data = Data.find(item => {

        return parseInt(id, 10) === item.id;
    
    });

    
    return (

        <>
        <Wrap>
            <PageName className="cm-Bold30 col-Black"> 주문 관리</PageName>
            <PageSubName className="cm-Mbold24 col-Navy">
            {" "}
            주문 내역 상세 조회
            </PageSubName>
            <InputSection>
                <DetailTable data={data} />
                <DetailOrder data={data} />
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