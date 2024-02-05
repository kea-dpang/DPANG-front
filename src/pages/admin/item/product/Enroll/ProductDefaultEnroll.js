import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Dropdown from "components/common/Dropdown";
import InputText from "./InputText";
import { GET_BrandList } from "@api/Brand";
import SearchDropdown from "@components/SearchDropdown";

const ProductDefaultEnroll = ({ productInfo, setProductInfo }) => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    GET_BrandList()
      .then((data) => {
        console.log("brand : ", data.data.content);
        const brandData = data.data.content.map((item) => ({
          id: item.id,
          name: item.name,
        }));
        setBrand(brandData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
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
    setProductInfo((prev) => ({ ...prev, itemName: e.target.value }));
  };
  const handlePriceChange = (e) => {
    setProductInfo((prev) => ({ ...prev, itemPrice: e.target.value }));
  };
  const handleStockChange = (e) => {
    setProductInfo((prev) => ({ ...prev, stockQuantity: e.target.value }));
  };
  const handleCategoryChange = (e) => {
    setProductInfo((prev) => ({ ...prev, category: e }));
  };
  const handleSubCateChange = (e) => {
    setProductInfo((prev) => ({ ...prev, subCategory: e }));
  };
  const handleBrandChange = (e) => {
    setProductInfo((prev) => ({ ...prev, sellerId: e }));
  };
  return (
    brand.length > 0 && (
      <Wrap>
        <div className="cm-SBold18 col-Navy">상품 기본 정보</div>
        {/* 상품 정보 입력 칸 */}
        <Table>
          {/* 상품명 등록 */}
          <Row>
            <p className="cm-SBold16 col-Black">상품명</p>
            <InputText id={"name"} onChange={handleNameChange} />
          </Row>
          {/* 판매가 등록 */}
          <Row>
            <p className="cm-SBold16 col-Black">판매가</p>
            <InputText
              id={"price"}
              placeholder={"판매가를 입력해주세요"}
              onChange={handlePriceChange}
            />
          </Row>
          {/* 브랜드 등록 */}
          <Row>
            <p className="cm-SBold16 col-Black">브랜드</p>
            <SearchDropdown
              id="brand"
              options={brand}
              width={"100%"}
              onChange={handleBrandChange}
            />
          </Row>
          {/* 카테고리 등록 : '패션' 카테고리일 때만 세부카테고리가 보여지게 */}
          <Row>
            <p className="cm-SBold16 col-Black">카테고리</p>
            <ContentBox>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: "1rem",
                }}
              >
                <Dropdown value={category} onChange={handleCategoryChange} />
                {productInfo.category === "패션" && (
                  <Dropdown
                    value={sub_category}
                    onChange={handleSubCateChange}
                  />
                )}
              </div>
            </ContentBox>
          </Row>
          {/* 입고량 등록 */}
          <Row>
            <p className="cm-SBold16 col-Black">입고량</p>
            <InputText
              id={"stock"}
              placeholder={"입고수량을 입력해주세요"}
              onChange={handleStockChange}
            />
          </Row>
        </Table>
      </Wrap>
    )
  );
};

export default ProductDefaultEnroll;
const Wrap = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 10rem 6.25rem 10rem;
  flex-direction: column;
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
