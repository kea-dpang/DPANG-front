import { customOrderStatus } from "assets/CustomName";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useErrorAlert, useQuestionAlert } from "@components/SweetAlert";
import { POST_cancel_order } from "@api/cancel";

const Row = styled.div`
  width: 72rem;
  border-bottom: 1px black solid;
  display: flex;
  font-size: 14px;
`;

const Col = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => setTextColor(props.status)}
`;

const setTextColor = (status) => {
  if (status === "CANCELLED") {
    return { color: "var(--orange)" };
  } else {
    return { color: "black" };
  }
};

const ItemImg = styled.img`
  width: 5rem;
  height: 5rem;
`;
const ItemName = styled.div`
  width: 18rem;
  height: 5rem;
  box-sizing: border-box;
  padding: 2rem;
`;
const Column = styled.div`
  width: 10rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const ItemColBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const ItemCol = styled.div`
  height: 6rem;
  display: flex;
  ${(props) => setBorder(props.i)};
  border-left: 1px solid black;
`;

const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled.button`
  width: 4.5rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 3px;
  ${(props) => setButton(props.status)};
  color: white;
  cursor: pointer;
`;
const setButton = (s) => {
  switch (s) {
    case "결제완료":
      return { backgroundColor: "var(--navy)", disabled: "false" };
    default:
      return { display: "none" };
  }
};

const Button1 = styled.button`
  width: 4.5rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 3px;
  ${(props) => setButton1(props.status)};
  color: white;
  cursor: pointer;
`;
const setButton1 = (s) => {
  switch (s) {
    case "배송완료":
      return { backgroundColor: "var(--navy)", disabled: "false" };
    default:
      return { display: "none" };
  }
};

const Button2 = styled.button`
  width: 4.5rem;
  height: 2rem;
  margin: 0.5rem;
  border-radius: 3px;
  ${(props) => setButton2(props.status)};
  color: var(--navy);
  border: 1px var(--navy) solid;
  cursor: pointer;
`;
const setButton2 = (s) => {
  switch (s) {
    case "배송완료":
      return { backgroundColor: "var(--white)", disabled: "false" };
    default:
      return { display: "none" };
  }
};

const setBorder = (i) => {
  if (i != 0) return { borderTop: "1px solid black" };
  else return { border: 0 };
};

function TableRow(props) {
  const navi = useNavigate();

  const data = props.data;
  console.log("DEDedededed", data);
  const showQuestionAlert = useQuestionAlert();
  const showErrorAlert = useErrorAlert();
  const handleCancel = (orderId, orderDetailId) => {
    showQuestionAlert({
      title: "취소하시겠습니까?",
      text: "확인시 즉시 취소 됩니다.",
      saveText: "신청 승인 되었습니다.",
      onConfirm: () => handleConfirm(orderId, orderDetailId),
    });
  };

  const handleConfirm = (orderId, orderDetailId) => {
    POST_cancel_order(orderId, orderDetailId)
      .then((data) => {
        console.log("성공함", data);
        window.location.reload();
      })
      .catch((error) => {
        console.log("실패함", error);
        showErrorAlert({
          title: "오류가 발생했습니다",
          text: "잠시후 다시 시도해주세요",
        });
        window.location.reload();
      });
  };

  return (
    <Row className="cm-SRegular16">
      <Col width="13rem">
        <Column>
          <p>{data.orderDate}</p>
          <p>{data.orderId}</p>
        </Column>
      </Col>
      <ItemColBox>
        {data.productList.map((b, i) => {
          return (
            <ItemCol key={i} i={i}>
              <Col width="11rem" status={b.orderStatus}>
                {customOrderStatus(b.orderStatus)}
              </Col>
              <Col width="22rem">
                <ItemImg src={b.productInfoDto.image} />
                <ItemName>{b.productInfoDto.name}</ItemName>
              </Col>
              <Col width="11rem">
                {(b.productInfoDto.price * b.productQuantity).toLocaleString()}{" "}
                /{b.productQuantity}
              </Col>

              <Col width="15rem">
                <ButtonBox>
                  <Button
                    status={customOrderStatus(b.orderStatus)}
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCancel(data.orderId, b.orderDetailId);
                    }}
                  >
                    취소
                  </Button>
                  {/* 버튼을 클릭하더라도 상위 요소에 대하 이벤트 버블링 발생하지 않도록 함 */}
                  <Button1
                    status={customOrderStatus(b.orderStatus)}
                    onClick={(e) => {
                      e.stopPropagation();
                      navi(
                        `/user/mypage/refund/enroll/${b.orderDetailId}/${data.orderId}`
                      );
                    }}
                  >
                    반품
                  </Button1>
                  <Button2
                    status={customOrderStatus(b.orderStatus)}
                    onClick={(e) => {
                      e.stopPropagation();
                      navi(
                        `/user/mypage/review/enroll/${b.productInfoDto.itemId}`
                      );
                    }}
                  >
                    리뷰작성
                  </Button2>
                </ButtonBox>
              </Col>
            </ItemCol>
          );
        })}
      </ItemColBox>
    </Row>
  );
}

export default TableRow;
