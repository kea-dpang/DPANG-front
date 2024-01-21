import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Row = styled.div`
  width: 73.9375rem;
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
  ${(props) => setBorder(props.i)}
`;

const setBorder = (i) => {
  if (i != 0) return { borderTop: "1px solid black" };
  else return { border: 0 };
};

function TableRow(props) {

  console.log(props.id)

  const data = props.data[props.id];

  return (
    <Row className="cm-SRegular16">
      <Col width="10.9375rem">
        <Column>
          <p>{data.date}</p>
          <p>{data.ordernum}</p>
        </Column>
      </Col>
      <Col width="9rem">{data.type}</Col>
      <Col width="8rem">{data.category}</Col>
      <Col width="10rem">{data.state}</Col>

      <ItemColBox>
        {data.item.map((b, i) => {
          return (
            <ItemCol key={i} i={i}>
              <Col width="16rem">
                <ItemImg src={b.img} />
                <ItemName>{b.name}</ItemName>
              </Col>
              <Col width="10rem">
                {b.money} / {b.amt}
              </Col>
              <Col width="10rem">{b.refund}</Col>
            </ItemCol>
          );
        })}
      </ItemColBox>
    </Row>
  );
}

export default TableRow;
