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
  background-color: red;
  width: 40%;
`;

const ItemCol = styled.div`
  height: 6rem;
  display: flex;
${(props)=>setBorder(props.i)}

`;

const setBorder = (i) =>{

  if(i!=0)
  return {borderTop: "1px solid black"}
  else
  return {border: 0}
  
  }

function TableRow(props) {

  const data = props.data[1];


  return (
    <Row className="cm-SRegular16">
      <Col width="10%">
        <Column>
          <p>{data.date}</p>
          <p>{data.ordernum}</p>
        </Column>
      </Col>
      <Col width="15%">{data.type}</Col>
      <Col width="15%">{data.category}</Col>
      <Col width="20%">{data.state}</Col>


      <ItemColBox>
        {data.item.map((b, i) => {

          return (
            <ItemCol key={i} i={i}>
              <Col width="30%">
                <ItemImg src={b.img} />
                <ItemName>{b.name}</ItemName>
              </Col>
              <Col width="30%">{b.money} / {b.amt}</Col>
              <Col width="30%">{b.refund}</Col>

            </ItemCol>
          )

        })}
      </ItemColBox>

    </Row>
  );

}

export default TableRow;
