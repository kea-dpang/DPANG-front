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

`


function TableRow(props) {

  const navi = useNavigate()
  return props.data.map((a) => {
    return (
      <Row className="cm-SRegular16" onClick={()=>{navi("/user/mypage/temp/refund/detail")}}>
        <Col width="9rem">
          <Column>
            <p>{a.date}</p>
            <p>{a.ordernum}</p>
          </Column>
        </Col>
        <Col width="8rem">{a.type}</Col>
        <Col width="6rem">{a.category}</Col>
        <Col width="9rem">{a.state}</Col>


        <ItemColBox>
          {a.item.map((b) => {

            return (
              <ItemCol>
                <Col width="22rem">
                  <ItemImg src={b.img} />
                  <ItemName>{b.name}</ItemName>
                </Col>
                <Col width="9rem">{b.money} / {b.amt}</Col>
                <Col width="9rem">{b.refund}</Col>

              </ItemCol>
            )

          })}
        </ItemColBox>

      </Row>
    );
  });
}

export default TableRow;