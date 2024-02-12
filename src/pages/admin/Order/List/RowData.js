
import styled from "styled-components";
import ArrowImg from "assets/images/UpArrowVector.svg";
import { useQuestionAlert } from "@components/SweetAlert";
import * as React from "react";
import { useState, useEffect } from "react";
import { PUT_change_status } from "@api/order";
import { customOrderStatus, customOrderStatusReverse } from "assets/CustomName";
import {useLocation, useNavigate} from "react-router-dom";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function RowData(props) {
    const data = props.data;
    const [click, setClick] = useState(false);

    const [rowHeight, setRowHeight] = useState(12)

    const [rotate, setRotate] = useState(180);

    const navigate = useNavigate();

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

    const showQuestionAlert = useQuestionAlert();
    const [orderList, setOrderList] = useState();
  
    const location = useLocation();
    const searchParams = new URLSearchParams(location.search);
    const page = searchParams.get("page") || 0;
    const [totalItems, setTotalItems] = useState(0);
  
    const [val, setVal] = useState({
      userId: "",
      orderStatus:"",
      startDate: "",
      endDate: "",
      page: 0,
      size: 10,
      sort: "",
    });
  
    useEffect(() => {
      setVal((prevState) => ({
        ...prevState,
        page: page,
      }));
    }, [page]);
  
const toNextStep = (orderId, state) => {
  if (!orderId) {
    console.error("주문 ID가 올바르지 않습니다.");
    return;
  }

  PUT_change_status(orderId, state)
    .then((data) => {
      console.log("성공", data);
      window.location.reload();
    })
    .catch((error) => {
      console.log("실패", error);
      console.error("에러 상세정보:", error.response.data);
      throw error;
    });
};

       
  
  // 이전 상태를 기억하는 변수 추가
  const [previousStatus, setPreviousStatus] = useState("");
  
  // 상태 처리 함수 수정
  const handleChange = (orderDetailId, state) => {
    const orderId = orderDetailId;
    // "주문승인"으로 돌아가는 경우 막음
    if (previousStatus === "ORDER_RECEIVED" && state !== "ORDER_RECEIVED") {
      console.error("주문 승인 상태로는 다시 돌아갈 수 없습니다");
      return;
    }
  
    showQuestionAlert({
      title: "주문 상태를 변경하시겠습니까?",
      text: "확인 클릭 시 해당 주문건에 대해서 상태가 업데이트 됩니다.",
      saveText: "변경 되었습니다.",
      onConfirm: () => {
        // 상태 변경 시 이전 상태 업데이트
        setPreviousStatus(state);
        toNextStep(orderId, state);
      },
    });
  };


return(
    
    <Row className="cm-SRegular16" height={rowHeight} >
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
      <Col width="11rem" height={rowHeight}>
        <Column>
        <p>{data.orderer}</p>
        </Column>
      </Col>
      <ItemColBox>
        {data.productList.map((c, f) => {
            return (
                <ItemCol
                    key={f}
                    f={f}
                    onClick={(e) => {
                        e.stopPropagation();
                        navigate(`/admin/order/${data.orderId}`)
                    }}
                    >
                    <Col width="17rem" height="6">
                        <ItemImg src={c.productInfoDto.image} />
                        <ItemName>&nbsp; &nbsp;{c.productInfoDto.name}</ItemName>
                    </Col>
                    <Col width="11rem" height="6">
                        <p>{c.productInfoDto.price} / {c.productQuantity}</p>
                    </Col>
                    <Col width="13rem" height="6">
                        <p>{customOrderStatus(c.orderStatus)}</p>
                    </Col>
                    <Col width="13rem" height="6">
                        
                    <ButtonContainer
                    style={{width: 150}}
                    onClick={(e) => {
                        e.stopPropagation();
                    }}
                    >
                        {c.orderStatus !== "CANCELLED" ? (
                      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
                        <InputLabel id="demo-select-small-label">
                            상태처리
                        </InputLabel>
                        <Select
                        labelId="demo-select-small-label"
                        id="demo-select-small"
                        value={c.orderStatus}
                        label="상태수정"
                        onChange={(e) => {
                            handleChange(c, e.target.value);
                        }}
                        >
                        <MenuItem value="ORDER_RECEIVED">주문승인</MenuItem>
                        <MenuItem value="PAYMENT_COMPLETED">결제완료</MenuItem>
                        <MenuItem value="DELIVERY_REQUESTED">배송요청</MenuItem>
                        <MenuItem value="PREPARING_FOR_DELIVERY">배송준비</MenuItem>
                        <MenuItem value="IN_DELIVERY">배송중</MenuItem>
                        <MenuItem value="DELIVERY_COMPLETED">배송완료</MenuItem>
                        <MenuItem value="CANCELLED">취소/환불</MenuItem>
                        </Select>

                        </FormControl>
                      ) : null} 
                    </ButtonContainer>
                    </Col>
                    </ItemCol>
            );
        })}
      </ItemColBox>
      </Row>


    )
}

export default RowData;

const Row = styled.div`
  width: 72rem;
  border-bottom: 1px black solid;
  display: flex;
  height: ${(props) => props.height}rem;
  overflow: hidden;
`;

const Col = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
  height: ${(props) => props.height}rem;
`;

const Arrow = styled.img`
  width: 1rem;
  height: 1rem;
  transform: rotate(${(props) => props.rotate}deg);
  transition: transform 0.3s ease;
`;

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
  align-items: center;
  justify-content: center;
`;

const ItemCol = styled.div`
  height: 6rem;
  display: flex;
`;

const ButtonContainer = styled.div`
width: 5.2rem;
`;
