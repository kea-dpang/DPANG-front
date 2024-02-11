import styled from "styled-components";
import React, { useEffect, useState } from "react";
import Header from "../../../components/common/UserHeaderBar/Index";
import "../../../styles/fonts.css";
import Footer from "@components/UserFooter/Index";
import { ReactComponent as Arrow } from "@images/arrowStroke.svg";
import OrderList from "./OrderList";
import EnrollAddress from "./Enroll/Address";
import Address from "./Address";
import { FormProvider, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { GET_Address, POST_Order } from "@api/cartOrder";
import { useRecoilState } from "recoil";
import {
  cartListAtom,
  checkedItemsAtom,
  totalAmountSelector,
} from "recoil/user/CartAtom";
import { useRecoilValue } from "recoil";
import {
  useQuestion2Alert,
  useQuestionConfirmAlert,
} from "@components/SweetAlert";

const OrderPage = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = methods;

  const [FoldCheck, setFoldCheck] = useState([
    { id: 0, name: "배송지", check: true },
    { id: 1, name: "주문", check: true },
  ]);

  const isEditing = watch("edit"); // edit 버튼을 누르면 true (EnrollAddress 컴포넌트가 보여야 한다.)

  const [addressInfo, setAddressInfo] = useState();
  let orderItemList = JSON.parse(localStorage.getItem("orderList"));
  const navigate = useNavigate();

  // alert
  const showQuestionConfirmAlert = useQuestionConfirmAlert();
  const showQuestion2Alert = useQuestion2Alert();

  // 가격 total
  const [checkedItems, setCheckedItems] = useRecoilState(checkedItemsAtom);
  const totalAmount = useRecoilValue(totalAmountSelector);

  // /* 가격 total */
  useEffect(() => {
    // 로컬 스토리지에서 가져온 orderItemList를 checkedItems에 설정
    setCheckedItems(orderItemList);
  }, []);

  /* orderItemList가 없는 경우 메인 페이지로 리다이렉트 */
  useEffect(() => {
    if (!orderItemList || orderItemList.length === 0) {
      console.log("조건문 통과");
      navigate("/user/mainpage");

      return null;
    }
  }, [orderItemList, navigate]);

  /* api로 회원의 배송지 정보 가져오기 */
  useEffect(() => {
    GET_Address()
      .then((data) => {
        console.log(data.data);
        setAddressInfo(data.data);
      })
      .catch((error) => console.log(error));
  }, []);

  /* 메뉴 fold 관리 */
  const handleClick = (menuId) => {
    console.log("메뉴 클릭");
    setFoldCheck(
      FoldCheck.map((item) =>
        item.id === menuId ? { ...item, check: !item.check } : item
      )
    );
  };

  /* EnrollAddress에서 추가 및 수정했을 때 데이터 가져오기 */
  const handleAddressSubmit = (addressData) => {
    console.log(addressData); // 자식 컴포넌트(EnrollAddress)에서 보낸 주소 데이터
    setAddressInfo(addressData);
  };

  /* 주문하기 */
  const handleOrderBtn = () => {
    showQuestionConfirmAlert({
      title: `결제하시겠습니까?`,
      text: "확인 클릭 시 마일이 소진됩니다.",
      saveText: "결제되었습니다.",
      navi: "/user/mainpage",
      onConfirm: () =>
        POST_Order(addressInfo, checkedItems)
          .then((data) => {
            console.log(data);
            const remainedMileage =
              data.data.mileageInfo.mileage +
              data.data.mileageInfo.personalChargedMileage;
            localStorage.setItem("totalMileage", remainedMileage);
          })
          // localStorage.removeItem("orderList");
          // 잔여 마일리지 계산
          // const oldMileage = parseInt(
          //   localStorage.getItem("totalMileage"),
          //   10
          // );
          // console.log(oldMileage);
          // console.log(oldMileage - (totalAmount + 3000));
          //   localStorage.setItem(
          //     "totalMileage",
          //     oldMileage - (totalAmount + 3000)
          //   );
          // })
          .catch((error) => {
            console.log(error);
            if (error.response.status === 400) {
              const totalMileage = localStorage.getItem("totalMileage");

              // 이후에 없애도 될듯
              showQuestion2Alert({
                title: `${(totalAmount - totalMileage).toLocaleString(
                  "ko-KR"
                )} 마일이 부족합니다.`,
                text: "마일리지 충전 페이지로 이동하시겠습니까?",
                navi: "/user/mypage/mileage/req",
              });
            }
          }),
    });
  };
  return (
    <FormProvider {...methods}>
      <Header />
      <Wrap>
        <CartWrap>
          <Title className="cm-LBold30 col-DarkNavy">장바구니</Title>

          <Main>
            {/* 배송지 정보 메뉴 */}
            <Menu onClick={() => handleClick(0)}>
              <p>배송지 정보</p>
              <Arrow
                style={
                  FoldCheck[0].check ? { transform: "rotate(180deg)" } : {}
                }
              />
            </Menu>
            {FoldCheck[0].check &&
              (!addressInfo?.zipCode || isEditing ? (
                <EnrollAddress
                  data={addressInfo}
                  handleAddressSubmit={handleAddressSubmit}
                />
              ) : (
                <Address data={addressInfo} />
              ))}

            {/* 주문 정보 메뉴 */}
            <Menu onClick={() => handleClick(1)}>
              <p>주문 정보</p>
              <Arrow
                style={
                  FoldCheck[1].check ? { transform: "rotate(180deg)" } : {}
                }
              />
            </Menu>
            {FoldCheck[1].check && <OrderList orderItemList={orderItemList} />}
          </Main>
          <OrderBtn className="Btn_M_Navy" onClick={handleOrderBtn}>
            {(totalAmount + 3000).toLocaleString("ko-KR")}원 결제하기
          </OrderBtn>
        </CartWrap>
      </Wrap>
      <Footer />
    </FormProvider>
  );
};

export default OrderPage;
const Wrap = styled.div`
  width: 100vw;
  max-width: 100%;

  box-sizing: border-box;
`;
const CartWrap = styled.div`
  padding: 0 15rem;
`;
const Title = styled.div`
  display: flex;
  justify-content: center;
  padding: 3rem 0;
`;
const Main = styled.div``;
const Menu = styled.div`
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  &:hover {
    cursor: pointer; // 마우스를 올렸을 때 커서를 포인터로 변경
  }
`;
const OrderBtn = styled.button`
  width: 100%;
`;
