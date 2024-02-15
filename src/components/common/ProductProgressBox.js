import styled from 'styled-components'
import { customDate } from "assets/CustomName";
import { GET_order_list } from "@api/order";
import { useEffect, useState } from 'react';
import UserEmptyData from "@components/UserEmptyData";

const Container = styled.div`

width: 72rem;
height: 14rem;
display: flex;
flex-direction: column;
justify-content: center;

`

const Box = styled.div`

width: 72rem;
height: 12.5rem;
background-color: var(--light-grey);
display: flex;
align-items: center;
justify-content: center;

`
const StatusBox = styled.div`

width: ${(props) => props.width};
height: ${(props) => props.height};
display: flex;
justify-content: ${(props) => props.align};
align-items: end;

`

const Status = styled.div`

width: 4rem;
height: 4rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const StatusCircle = styled.div`

background-color: var(--semi-light-grey);
width: 3rem;
height: 3rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;

`
const ArrowBox = styled.div`

width: 3rem;
height: 4rem;
display: flex;
align-items: center;
justify-content: center;


`

const Refund = styled.div`

width: 8rem;
height: 2rem;
display: flex;
justify-content: center;
align-items: center

`

function Index(props) {

    const orderOverview = [0, 0, 0, 0, 0, 0];
    const userId = localStorage.getItem("userId");
    const [recentOrderData, setRecentOrderData] = useState();

    useEffect(() => {

        const currentDate = new Date();
        const prevDate = new Date();
        prevDate.setDate(currentDate.getDate() - 30);

        console.log(currentDate);

        const val = {
            userId: parseInt(userId, 10),
            page: 0,
            size: 100,
            sort: "",
            endDate: customDate(currentDate),
            startDate: customDate(prevDate),
        };

        GET_order_list(val)
            .then((data) => {
                console.log("최근 30일 주문 데이터 조회 성공!!", data.data.content);
                setRecentOrderData(data.data.content);
            })
            .catch((error) => {
                console.log("최근 30일 주문 데이터 조회 실패", error);
            })

    }, [])

    if (!recentOrderData) {
        return (
            <UserEmptyData text="이런....주문 내역이 없네요!!" />
        ); // 혹은 다른 로딩 상태를 표시할 JSX를 반환할 수 있습니다.
    }

    recentOrderData.map((a, i) => {
        a.productList.map((b, k) => {
            switch (b.orderStatus) {
                case "PAYMENT_COMPLETED":
                    orderOverview[0] = orderOverview[0] + 1;
                    break;
                case "DELIVERY_REQUESTED":
                    orderOverview[1] = orderOverview[1] + 1;
                    break;
                case "PREPARING_FOR_DELIVERY":
                    orderOverview[2] = orderOverview[2] + 1;
                    break;
                case "IN_DELIVERY":
                    orderOverview[3] = orderOverview[3] + 1;
                    break;
                case "DELIVERY_COMPLETED":
                    orderOverview[4] = orderOverview[4] + 1;
                    break;
                default:
                    orderOverview[5] = orderOverview[5] + 1;
                    break;

            }
        });
    });


    return (

        <Container>
            주문 진행 현황
            <Box className="cm-SRegular16">
                <StatusBox width="16rem" height="1rem" />
                <StatusBox width="40rem" height="4rem" align="space-between">
                    <Status>결제완료<StatusCircle>{orderOverview[0]}</StatusCircle></Status>
                    <ArrowBox className="cm-MBold24">&#62;</ArrowBox>
                    <Status>배송요청<StatusCircle>{orderOverview[1]}</StatusCircle></Status>
                    <ArrowBox className="cm-MBold24">&#62;</ArrowBox>
                    <Status>배송준비<StatusCircle>{orderOverview[2]}</StatusCircle></Status>
                    <ArrowBox className="cm-MBold24">&#62;</ArrowBox>
                    <Status>배송중<StatusCircle>{orderOverview[3]}</StatusCircle></Status>
                    <ArrowBox className="cm-MBold24">&#62;</ArrowBox>
                    <Status>배송완료<StatusCircle>{orderOverview[4]}</StatusCircle></Status>
                </StatusBox>
                <StatusBox width="16rem" height="12.5rem" align="end"><Refund>취소/환불 {orderOverview[5]}</Refund></StatusBox>
            </Box>
        </Container>
    )
}

export default Index;   