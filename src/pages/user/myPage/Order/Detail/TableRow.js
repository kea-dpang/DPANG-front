import { useNavigate } from "react-router-dom";
import styled from "styled-components";

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
${(props)=>setBorder(props.i)};
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
const setButton2 = (s) => {

  switch (s) {
    case "배송완료":
      return { backgroundColor: 'var(--white)', disabled: "false" };
    default:
      return { display: 'none' }

  }

}

const setBorder = (i) =>{

if(i!=0)
return {borderTop: "1px solid black"}
else
return {border: 0}

}

function TableRow(props) {

  const navi = useNavigate();

  const data = props.data[0];

  
    return (
      <Row className="cm-SRegular16">
        <Col width="13rem">
          <Column>
            <p>{data.date}</p>
            <p>{data.ordernum}</p>
          </Column>
        </Col>
        <Col width="11rem">{data.status}</Col>
        <ItemColBox>
          {data.item.map((b, i) => {

            return (
              <ItemCol key={i} i={i} onClick={(e) => { e.stopPropagation(); navi('/user/mypage/temp/order/detail') }}>
                <Col width="22rem">
                  <ItemImg src={b.img} />
                  <ItemName>{b.name}</ItemName>
                </Col>
                <Col width="11rem">{b.money} / {b.amt}</Col>

                <Col width="15rem">
                  <ButtonBox>
                    <Button status={data.status}>취소</Button>
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
    );

}

export default TableRow;