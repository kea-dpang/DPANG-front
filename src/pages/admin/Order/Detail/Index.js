import styled from "styled-components";
import * as React from "react";
import DetailOrder from "./DetailOrder";
import { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Data from "@data/admin/AdminOrderData";
import DetailTable from "./DetailTable";
import { GET_order_detail } from "@api/order";

const Index = () => {

    const { id } = useParams();
    const [orderDetail, setOrderDetail] = useState();


    useEffect(()=> {
      GET_order_detail(parseInt(id, 10))
      .then((data)=> {
        console.log("상세조회 성공", data)
        setOrderDetail(data.data)
      })
      .catch((error)=> {
        console.log("상세조회 실패", error)
      })
    }, [])

    if(!orderDetail) {
      return <></>
    }

    
    return (

        <>
        <Wrap>
            <PageName className="cm-LBold30 col-Black"> 주문 관리</PageName>
            <PageSubName className="cm-MBold24 col-Navy">
            주문 내역 상세 조회
            </PageSubName>
            <InputSection>
                <DetailTable data={orderDetail} />
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
  padding: 2rem 7.5rem 6.25rem 7.5rem;
  flex-direction: column;
  align-items: center;
`;