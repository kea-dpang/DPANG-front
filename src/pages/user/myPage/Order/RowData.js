import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import { POST_cancel_order } from "@api/cancel";
import { customOrderStatus } from "assets/CustomName";
import ArrowImg from "assets/images/UpArrowVector.svg";
import { idID } from "@mui/material/locale";
import { useQuestionAlert } from "@components/SweetAlert";

function RowData(props) {
  const data = props.data;
  const showQuestionAlert = useQuestionAlert();

  const [click, setClick] = useState(false);

  const [rowHeight, setRowHeight] = useState(6);

  const [rotate, setRotate] = useState(180);

  const navi = useNavigate();

  const handleClick = (e) => {
    e.stopPropagation();

    if (click) {
      setRowHeight(6);
      setRotate(rotate + 180);
      setClick(!click);
    } else {
      setRowHeight(data.productList.length * 6);
      setRotate(rotate + 180);
      setClick(!click);
    }
  };

  const handleCancel = (id) =>{

    showQuestionAlert({
      title: "신청을 승인하시겠습니까?",
      text: "확인 클릭 시 승인 됩니다.",
      saveText: "신청 승인 되었습니다.",
      onConfirm: () => handleConfirm(id),
    });



  }

  const handleConfirm = (id) =>{


      POST_cancel_order(id)
        .then((data) => {
          console.log("성공함", data);
          window.location.reload();
        })
        .catch((error) => {
          console.log("실패함", error);
        });




  }


  return(
    <Row className="cm-SRegular16" height={rowHeight}>
      <Col
        width="2rem"
        height={rowHeight}
        onClick={(e) => {
          handleClick(e);
        }}
      >
        {data.productList.length > 1 && (
          <Arrow src={ArrowImg} rotate={rotate} />
        )}
      </Col>
      <Col width="11rem" height={rowHeight}>
        <Column>
          <p>{data.orderDate}</p>
          <p>{data.orderId}</p>
        </Column>
      </Col>

      <ItemColBox>
        {data.productList.map((b, i) => {
          return (
            <ItemCol
              key={i}
              i={i}
              onClick={(e) => {
                e.stopPropagation();
                navi(`/user/mypage/order/detail/${data.orderId}`);
              }}
            >
              <Col width="11rem" height="6" status={b.orderStatus}>
                {customOrderStatus(b.orderStatus)}
              </Col>
              <Col width="22rem" height="6">
                <ItemImg src={b.productInfoDto.image} />
                <ItemName>&nbsp; &nbsp;{b.productInfoDto.name}</ItemName>
              </Col>
              <Col width="11rem" height="6">
                {(b.productInfoDto.price * b.productQuantity).toLocaleString()}{" "}
                /{b.productQuantity}
              </Col>

              <Col width="15rem" height="6">
                <ButtonBox>
                  {/* 버튼을 누르면 주문의 항목에 대한 ID를 넘겨서 취소 요청을 보낸다 */}
                  <Button
                    status={customOrderStatus(b.orderStatus)}
                    onClick={(e)=>{ e.stopPropagation(); handleCancel(b.orderDetailId);}}
                  >
                    취소
                  </Button>
                  {/* 버튼을 클릭하더라도 상위 요소에 대하 이벤트 버블링 발생하지 않도록 함 */}
                  {/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!여기!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */}
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
  )
}

const Row = styled.div`
  width: 72rem;
  border-bottom: 1px black solid;
  display: flex;
  font-size: 14px;
  height: ${(props) => props.height}rem;
  overflow: hidden;
`;

const Col = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height}rem;
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
  width: 11rem;
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
`;

const Arrow = styled.img`
  width: 1rem;
  height: 1rem;
  transform: rotate(${(props) => props.rotate}deg);
  transition: transform 0.3s ease;
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
export default RowData;
