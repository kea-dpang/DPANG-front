import styled from "styled-components";
import React, { useState } from 'react';

const Row = styled.div`
  width: 79.8125rem;
  border-bottom: 1px black solid;
  display: flex;
  color: #000;
  font-family: Pretendard;
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 1.25rem; /* 125% */  
`;

const Col = styled.div`
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemImg = styled.img`
  width: 5.1875rem;
  height: 5.51675rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;

`;
const ItemName = styled.div`

width: 11rem;

`
const Column = styled.div`

width: 12rem;
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

`;



const Dropdown = ({ options, selectedOption, onChange }) => {
  return (
    <select
      value={selectedOption}
      onChange={onChange}
      style={{
        display: 'flex',
        width: '8.875rem',
        height: '2.1875rem',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0.3125rem',
        flexShrink: 0,
        borderRadius: '0.1875rem',
        border: '1px solid var(--navy, #043277)',
        background: 'var(--white, #FFF)',
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
};



function TableRow(props) {
  const [selectedStatus, setSelectedStatus] = useState('결제 완료');

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

  return props.data.map((a) => {
    return (
      <Row className="cm-SRegular16">
        <Col width="15rem">
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
                <Col width="13rem">{b.money} / {b.amt}</Col>

              </ItemCol>
            )

          })}
        </ItemColBox>
        <Col width="15rem">{a.orderid}</Col>

        <Col width="15rem">
        <Dropdown
            options={['결제 완료', '배송 요청', '배송 준비중', '배송중', '배송완료']}
            selectedOption={selectedStatus}
            onChange={handleStatusChange}
          />
        </Col>

      </Row>
    );
  });
}

export default TableRow;
