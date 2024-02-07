import styled from "styled-components";
import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import PhotoIcon from "@mui/icons-material/Photo";
import DeleteIcon from "@mui/icons-material/Delete";
import EventImage from "@adminPages/eventPage/Enroll/EventImage";
import { POST_Image } from "@api/image";

const ProductDetailEnroll = ({ productInfo, setProductInfo }) => {
  const [itemImg, setItemImg] = useState();
  const [infoImg, setInfoImg] = useState();

  // 상품 이미지 관리
  const handleImageChange = (file) => {
    console.log("file: ", file);
    POST_Image(file)
      .then((data) => {
        console.log("사진 등록", data.data.uploadedFileUrl);
        setProductInfo({
          ...productInfo,
          thumbnailImage: data.data.uploadedFileUrl,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleImageDelete = () => {
    setProductInfo({ ...productInfo, thumbnailImage: null });
  };

  // 상품 상세 이미지 관리
  const handleDetailImageChange = (file) => {
    console.log("file: ", file);
    POST_Image(file)
      .then((data) => {
        console.log("사진 등록", data.data.uploadedFileUrl);
        setProductInfo({
          ...productInfo,
          thumbnailImage: data.data.uploadedFileUrl,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const handleDetailImageDelete = () => {
    setProductInfo({ ...productInfo, informationImages: null });
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
            eventImage={productInfo.thumbnailImage}
            handleImageDelete={handleImageDelete}
            handleImageChange={handleImageChange}
          />
        </Row>
        {/* 상세 이미지  */}
        <Row>
          <p className="cm-SBold16 col-Black">상세 이미지</p>
          <EventImage
            eventImage={productInfo.informationImages}
            handleImageDelete={handleDetailImageDelete}
            handleImageChange={handleDetailImageChange}
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
