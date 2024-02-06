import styled from "styled-components";
import * as React from "react";
import { useState, useEffect } from "react";
import "../../../../styles/fonts.css";
import Table from "pages/admin/cancel/Detail/Table";
import { useParams } from "react-router-dom";
import RefundDetail from "./RefundDetail";
import DetailTableTitle from "../../../../components/common/HiddenShowBtn";
import { GET_cancel_detail } from "@api/cancel";

const Index = () => {
  const { id } = useParams();
  const [click, setClick] = useState(true);
  const [cancelDetail, setCancelDetail] = useState();

  const handleClick = () => {
    setClick(!click);
  };

  //서버로부터 특정 ID에 대한 조회를 요청하는 API
  useEffect(() => {
    GET_cancel_detail(id)
      .then((data) => {
        console.log("성공했습니다", data.data);
        console.log(data.data);
        setCancelDetail(data.data);
      })
      .catch((error) => {
        console.log("실패했습니다", error);
      });
  }, []);

  if (!cancelDetail) {
    return <div />;
  }

  return (
    <>
      <Wrap>
        <PageName className="cm-LBold30 col-Black"> 취소 관리</PageName>
        <PageSubName className="cm-MBold24 col-Navy">
          {" "}
          취소 내역 상세조회
        </PageSubName>

        <InputSection>
          <Table data={cancelDetail} />

          <DetailTableTitle
            text="취소 상세 정보"
            width="73.9375rem"
            handleclick={handleClick}
          />

          {click && <RefundDetail data={cancelDetail} />}
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
