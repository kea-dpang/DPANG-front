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

const ButtonBox = styled.div`

display: flex;
flex-direction: column;

`
const Button = styled.button`

padding: 0.5rem;
margin: 0.5rem;
border-radius: 3px;
${(props)=>setButton(props.status)};
color: white;

`
const setButton = (s) =>{

  switch(s) {
    case "결제완료":
      return {backgroundColor: 'var(--navy)', disabled: "false"};
    case "배송완료":
      return {backgroundColor: 'var(--navy)', disabled: "false"};
    default:
      return {display: 'none'}

  }

}

const Button2 = styled.button`

padding: 0.5rem;
margin: 0.5rem;
border-radius: 3px;
${(props)=>setButton2(props.status)};
color: var(--navy);
border: 1px var(--navy) solid;

`
const setButton2 = (s) =>{

  switch(s) {
    case "배송완료":
      return {backgroundColor: 'var(--white)', disabled: "false"};
    default:
      return {display: 'none'}

  }

}



function TableRow(props) {
  return props.data.map((a) => {
    return (
      <Row className="cm-SRegular16">
        <Col width="13rem">
          <Column>
            <p>{a.date}</p>
            <p>{a.ordernum}</p>
          </Column>
        </Col>
        <ItemColBox>
          {a.item.map((b) => {

            return (
              <ItemCol>
                <Col width="22rem">
                  <ItemImg src={b.img} />
                  <ItemName>{b.name}</ItemName>
                </Col>
                <Col width="11rem">{b.money} / {b.amt}</Col>

              </ItemCol>
            )

          })}
        </ItemColBox>
        <Col width="11rem">{a.status}</Col>
        <Col width="15rem">
          <ButtonBox>
            <Button status={a.status}>취소/반품</Button>
            <Button2 status={a.status}>리뷰작성</Button2>
          </ButtonBox>
        </Col>
      </Row>
    );
  });
}

export default TableRow;