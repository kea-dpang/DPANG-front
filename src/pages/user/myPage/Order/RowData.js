import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useState } from "react";
import ArrowImg from '../../../../assets/images/UpArrowVector.svg'

function RowData(props) {

    const data = props.data;

    const [click, setClick] = useState(false);

    const [rowHeight, setRowHeight] = useState(6);

    const [rotate, setRotate] = useState(180);

    const navi = useNavigate();

    const handleClick = (e) => {

        e.stopPropagation();

        if (click) {

            setRowHeight(6);
            setRotate(rotate+180);
            setClick(!click);

        }
        else {

            setRowHeight(data.item.length * 6);
            setRotate(rotate+180);
            setClick(!click);

        }


    }

    return (

        <Row className="cm-SRegular16" height={rowHeight}>
            <Col width="2rem" height={rowHeight} onClick={(e)=>{handleClick(e);}}><Arrow src={ArrowImg} rotate={rotate}/></Col>
            <Col width="11rem" height={rowHeight}>
                <Column>
                    <p>{data.date}</p>
                    <p>{data.ordernum}</p>
                </Column>
            </Col>
            <Col width="11rem" height={rowHeight}>{data.status}</Col>
            <ItemColBox>
                {data.item.map((b, i) => {

                    return (
                        <ItemCol key={i} i={i} onClick={(e) => { e.stopPropagation(); navi(`/user/mypage/temp/order/detail/${data.id}`) }}>
                            <Col width="22rem" height="6">
                                <ItemImg src={b.img} />
                                <ItemName>{b.name}</ItemName>
                            </Col>
                            <Col width="11rem" height="6">{b.money} / {b.amt}</Col>

                            <Col width="15rem" height="6">
                                <ButtonBox>
                                    <Button status={data.status} onClick={(e) => { e.stopPropagation(); }}>취소</Button>
                                    {/* 버튼을 클릭하더라도 상위 요소에 대하 이벤트 버블링 발생하지 않도록 함 */}
                                    <Button1 status={data.status} onClick={(e) => { e.stopPropagation(); navi('/user/mypage/temp/refund/enroll') }}>반품</Button1>
                                    <Button2 status={data.status} onClick={(e) => { e.stopPropagation(); navi('/user/mypage/temp/review/enroll') }}>리뷰작성</Button2>
                                </ButtonBox>
                            </Col>

                        </ItemCol>
                    )

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
`;

const ItemImg = styled.img`
width: 5rem;
height: 5rem;

`
const ItemName = styled.div`

width: 11rem;

`
const Column = styled.div`

width: 10rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const ItemColBox = styled.div`

display: flex;
flex-direction: column;

`

const ItemCol = styled.div`

height: 6rem;
display: flex;
${(props) => setBorder(props.i)};
border-left: 1px solid black;

`

const ButtonBox = styled.div`

display: flex;
flex-direction: column;

`
const Button = styled.button`

width: 4.5rem;
height: 2rem;
margin: 0.5rem;
border-radius: 3px;
${(props) => setButton(props.status)};
color: white;

`
const setButton = (s) => {


    switch (s) {
        case "결제완료":
            return { backgroundColor: 'var(--navy)', disabled: "false" };
        default:
            return { display: 'none' }

    }

}


const Button1 = styled.button`

width: 4.5rem;
height: 2rem;
margin: 0.5rem;
border-radius: 3px;
${(props) => setButton1(props.status)};
color: white;

`
const setButton1 = (s) => {

    switch (s) {
        case "배송완료":
            return { backgroundColor: 'var(--navy)', disabled: "false" };
        default:
            return { display: 'none' }

    }

}

const Button2 = styled.button`

width: 4.5rem;
height: 2rem;
margin: 0.5rem;
border-radius: 3px;
${(props) => setButton2(props.status)};
color: var(--navy);
border: 1px var(--navy) solid;

`

const Arrow = styled.img`

width: 1rem;
height: 1rem;
transform: rotate(${(props)=>props.rotate}deg);

`
const setButton2 = (s) => {

    switch (s) {
        case "배송완료":
            return { backgroundColor: 'var(--white)', disabled: "false" };
        default:
            return { display: 'none' }

    }

}

const setBorder = (i) => {

    if (i != 0)
        return { borderTop: "1px solid black" };
    else
        return { border: 0 };

}
export default RowData;