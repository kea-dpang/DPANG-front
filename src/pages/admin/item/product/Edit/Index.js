import styled from "styled-components";
import * as React from "react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductDefaultEdit from "./ProductDefaultEdit";
import ProductDetailEnroll from "./ProductDetailEdit";
import { useParams } from "react-router-dom";
import { GET_ItemInfo, PUT_Item } from "@api/Item";
import { useConfirmAlert } from "@components/SweetAlert";
// 상품 index 페이지
const ProductEditPage = () => {
  let itemId = useParams().id;
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단

  const navi = useNavigate();
  const [itemInfo, setItemInfo] = useState({
    name: "",
    price: "",
    discountRate: "",
    stockQuantity: "",
    thumbnailImage: "",
    informationImages: [],
    category: "",
    subCategory: "",
  });
  //   주소에서 가져온 id값과 일치하는 상품조회 데이터 가져오기
  useEffect(() => {
    GET_ItemInfo(itemId)
      .then((data) => {
        console.log("상품 data : ", data);
        setItemInfo({
          name: data.name,
          price: data.price,
          stockQuantity: data.stockQuantity,
          thumbnailImage: data.thumbnailImage,
          informationImages: data.informationImages,
          discountRate: data.discountRate,
          category: data.category,
          subCategory: data.subCategory,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }, [itemId]);
  // 입력필드에 다 안찼으면 등록버튼 비활성화
  useEffect(() => {
    if (
      itemInfo.name !== "" &&
      itemInfo.price !== "" &&
      itemInfo.stockQuantity !== "" &&
      itemInfo.thumbnailImage !== "" &&
      itemInfo.informationImages !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    itemInfo.name,
    itemInfo.price,
    itemInfo.stockQuantity,
    itemInfo.thumbnailImage,
    itemInfo.informationImages,
  ]);

  const showConfirmAlert = useConfirmAlert();

  const handleSubmit = () => {
    PUT_Item(itemId, itemInfo)
      .then((data) => {
        showConfirmAlert({
          title: "상품이 수정되었습니다.",
          navi: "/admin/product",
        });
      })
      .catch((error) => {
        console.log(error);
      });
    console.log("상품 수정할게: ", itemInfo);
  };

  return (
    <>
      {itemInfo && (
        <Wrap>
          <PageName className="cm-LBold30 col-Black"> 상품 관리 </PageName>
          <PageSubName className="cm-MBold24 col-Navy"> 상품 수정</PageSubName>
          {/* 상품 내용 입력하는 공간 */}
          <InputSection>
            <ProductDefaultEdit
              productInfo={itemInfo}
              setProductInfo={setItemInfo}
            />
            <ProductDetailEnroll
              productInfo={itemInfo}
              setProductInfo={setItemInfo}
            />
            {/* 수정하기 버튼 */}
            <Button>
              <button
                onClick={handleSubmit}
                type="submit"
                className="Btn_S_Navy"
                disabled={!isFormValid}
                style={
                  !isFormValid
                    ? {
                        backgroundColor: "var(--semi-light-grey)",
                        cursor: "not-allowed",
                      }
                    : {}
                }
              >
                수정완료
              </button>
            </Button>
          </InputSection>
        </Wrap>
      )}
    </>
  );
};

export default ProductEditPage;
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
  padding: 2.125rem 7.5rem 0.9375rem 8.5rem;
  align-items: center;
  font-size: 1.5rem;
`;
const InputSection = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 6rem 7.5rem;
  flex-direction: column;
  align-items: center;
  gap: -0.0625rem;
`;
const Button = styled.div`
  display: flex;
`;
