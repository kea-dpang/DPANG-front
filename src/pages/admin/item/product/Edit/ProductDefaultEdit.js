import styled from "styled-components";
import React from "react";
import Box from "@mui/material/Box";
import InputEdit from "@adminPages/item/brand/Edit/InputEdit";
import { POST_Image } from "@api/image";

const ProductDefaultEdit = ({ productInfo, setProductInfo }) => {
  const handleNameChange = (e) => {
    setProductInfo((prev) => ({ ...prev, name: e.target.value }));
  };
  const handlePriceChange = (e) => {
    setProductInfo((prev) => ({ ...prev, price: e.target.value }));
  };
  const handleStockChange = (e) => {
    setProductInfo((prev) => ({ ...prev, stockQuantity: e.target.value }));
  };

  return (
    <Wrap>
      <div className="cm-SBold18 col-Navy">상품 기본 정보</div>
      {/* 상품 정보 입력 칸 */}
      <Table>
        {/* 상품명 등록 */}
        <Row>
          <p className="cm-SBold16 col-Black">상품명</p>
          <InputEdit
            value={productInfo.name}
            id={"name"}
            placeholder={"상품명을 입력해주세요"}
            onChange={handleNameChange}
          />
        </Row>
        {/* 판매가 등록 */}
        <Row>
          <p className="cm-SBold16 col-Black">판매가</p>
          <InputEdit
            value={productInfo.price}
            id={"price"}
            placeholder={"판매가를 입력해주세요"}
            onChange={handlePriceChange}
          />
        </Row>
        {/* 재고 수정 */}
        <Row>
          <p className="cm-SBold16 col-Black">재고</p>
          <InputEdit
            value={productInfo.stockQuantity}
            id={"stockQuantity"}
            placeholder={"재고량을 수정해주세요"}
            onChange={handleStockChange}
          />
        </Row>
      </Table>
    </Wrap>
  );
};

export default ProductDefaultEdit;

const Wrap = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 10rem 6.25rem 10rem;
  flex-direction: column;
`;
const Section = styled.div`
  display: flex;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding-top: 1rem;
  flex-direction: column;
  align-items: center;
  gap: -0.0625rem;
`;
const ContentBox = ({ children }) => (
  <div style={{ width: "100%", margin: "1rem" }}>
    <Box
      sx={{
        "& > :not(style)": { m: 0, width: "100%" },
        display: "flex",
        flexDirection: "column",
      }}
      noValidate
      autoComplete="off"
    >
      {children}
    </Box>
  </div>
);
const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 69rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  // padding: 0rem 7.5rem 1rem 7.5rem;
  padding-top: 1rem;
`;
const Row = styled.div`
  border-top: 1px solid var(--black);
  &:last-child {
    border-bottom: 1px solid var(--black);
  }
  display: flex;
  p {
    background: var(--light-grey, #f4f4f4);
    /* padding: 2rem; */
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Content = styled.div`
  width: 100%;
  margin: 1rem;
`;
const Submit = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;
