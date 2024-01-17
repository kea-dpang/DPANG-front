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
`;

function TableRow(props) {

  const data = props.data[1];


  return (
    <Row className="cm-SRegular16">
      <Col width="9rem">
        <Column>
          <p>{data.date}</p>
          <p>{data.ordernum}</p>
        </Column>
      </Col>
      <Col width="8rem">{data.type}</Col>
      <Col width="6rem">{data.category}</Col>
      <Col width="9rem">{data.state}</Col>


      <ItemColBox>
        {data.item.map((b) => {

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

}

export default TableRow;
