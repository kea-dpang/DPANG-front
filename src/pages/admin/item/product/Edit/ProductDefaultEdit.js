import styled from "styled-components";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Dropdown from "components/common/Dropdown";

const ProductDefaultEdit = ({ productInfo, setProductInfo }) => {
  const [itemInfo, setItemInfo] = useState(); // 상품 상세조회 할 id값 주소에서 가져오기

  const [eventname, setEventName] = useState("");
  const [code, setCode] = useState([]);
  const [productList, setProductList] = useState([]);
  const [salepercent, setPercent] = useState("");
  const brand = ["브랜드를 선택해주세요", "lg생활건강", "카카오"];
  const category = [
    "카테고리를 선택해주세요",
    "패션",
    "뷰티",
    "스포츠/레저",
    "디지털/가전",
    "인테리어",
    "출산/유아동",
    "생활",
  ];
  const sub_category = [
    "세부 카테고리를 선택해주세요",
    "여성의류",
    "남성의류",
    "상의",
    "하의",
    "액세서리",
    "가방",
  ];

  const handleNameChange = (e) => {
    setProductInfo((prev) => ({ ...prev, name: e.target.value }));
  };

  const handlePriceChange = (e) => {
    setProductInfo((prev) => ({ ...prev, price: e.target.value }));
  };

  const handleStockChange = (e) => {
    setProductInfo((prev) => ({ ...prev, stock: e.target.value }));
  };
  return (
    <Wrap>
      <div className="cm-SBold18 col-Navy">상품 기본 정보</div>
      {/* 상품 정보 입력 칸 */}
      <Table>
        {/* 상품명 등록 */}
        <Row>
          <p className="cm-SBold16 col-Black">상품명</p>
          <ContentBox>
            <TextField
              id="name"
              value={productInfo.name}
              onChange={handleNameChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--navy)", // 포커스 시 borderColor를 원하는 색상으로 변경
                  },
                },
              }}
              placeholder="상품명을 입력해주세요"
            />
          </ContentBox>
        </Row>
        {/* 판매가 등록 */}
        <Row>
          <p className="cm-SBold16 col-Black">판매가</p>
          <ContentBox>
            <TextField
              id="price"
              value={productInfo.price}
              onChange={handlePriceChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--navy)", // 포커스 시 borderColor를 원하는 색상으로 변경
                  },
                },
              }}
              placeholder="판매가를 입력해주세요"
            />
          </ContentBox>
        </Row>
        {/* 브랜드 등록 */}
        <Row>
          <p className="cm-SBold16 col-Black">브랜드</p>
          <ContentBox>
            {/* <TextField
                            id="price"
                            onChange={handlePriceChange}
                            variant="outlined"
                            InputLabelProps={{ shrink: true }}
                            sx={{
                                '& .MuiOutlinedInput-root': {
                                    '&.Mui-focused fieldset': {
                                        borderColor: 'var(--navy)', // 포커스 시 borderColor를 원하는 색상으로 변경
                                    },
                                },
                            }}
                            placeholder="판매가를 입력해주세요"
                        /> */}
            <Dropdown value={brand} />
          </ContentBox>
        </Row>
        {/* 카테고리 등록 */}
        <Row>
          <p className="cm-SBold16 col-Black">카테고리</p>
          <ContentBox>
            {/* <Dropdown value={category} /> */}
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                gap: "1rem",
              }}
            >
              <Dropdown value={category} />
              <Dropdown value={sub_category} />
            </div>
          </ContentBox>
        </Row>
        {/* 재고 수정 */}
        <Row>
          <p className="cm-SBold16 col-Black">재고</p>
          <ContentBox>
            <TextField
              id="stock"
              value={productInfo.stock}
              onChange={handleStockChange}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  "&.Mui-focused fieldset": {
                    borderColor: "var(--navy)", // 포커스 시 borderColor를 원하는 색상으로 변경
                  },
                },
              }}
              placeholder="입고수량을 입력해주세요"
            />
          </ContentBox>
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
