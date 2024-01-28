import styled from "styled-components";
import React from "react";
import EventImage from "@adminPages/eventPage/Enroll/EventImage";

const ProductDetailEnroll = ({ productInfo, setProductInfo }) => {
  // 대표 이미지 관리
  const handleDefaultImgChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProductInfo((prev) => ({ ...prev, productImage: reader.result }));
    };
    reader.readAsDataURL(file);
  };
  const handleDefaultImgDelete = () => {
    setProductInfo((prev) => ({ ...prev, productImage: null }));
  };
  // 상세 이미지 관리
  const handleDetailImgChange = (file) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      setProductInfo((prev) => ({ ...prev, detailImage: reader.result }));
    };
    reader.readAsDataURL(file);
  };
  const handleDetailImgDelete = () => {
    setProductInfo((prev) => ({ ...prev, detailImage: null }));
  };
  return (
    <Wrap>
      <div className="cm-SBold18 col-Navy">상품 상세 정보</div>
      {/* 상품 정보 입력 칸 */}
      <Table>
        {/* 상품 이미지  */}
        <Row>
          <p className="cm-SBold16 col-Black">상품 이미지</p>
          <EventImage
            eventImage={productInfo.productImage}
            handleImageDelete={handleDefaultImgDelete}
            handleImageChange={handleDefaultImgChange}
          />
        </Row>
        {/* 상세 이미지  */}
        <Row>
          <p className="cm-SBold16 col-Black">상세 이미지</p>
          <EventImage
            eventImage={productInfo.detailImage}
            handleImageDelete={handleDetailImgDelete}
            handleImageChange={handleDetailImgChange}
          />
        </Row>
      </Table>
    </Wrap>
  );
};

export default ProductDetailEnroll;
const Wrap = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 10rem 6.25rem 10rem;
  flex-direction: column;
`;
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
