import styled from 'styled-components';
import Table from './Table';
import searchimg from '../../../assets/images/search.svg';
import React, { useState } from 'react';

const OrderBox = () => {

  const [selectedStatus, setSelectedStatus] = useState('결제 완료');

  const handleStatusChange = (e) => {
    setSelectedStatus(e.target.value);
  };

    return(

        <Container>
            <HeadContainer>
            <Header>주문 관리</Header>
            <SubHeader>주문내역 확인</SubHeader>
            </HeadContainer>
            <SubHeadContainer>
            <StatusBox>
                <StatusTitle>상태</StatusTitle>
                <Dropdown
            options={['결제 완료', '배송 요청', '배송 준비중', '배송중', '배송완료']}
            selectedOption={selectedStatus}
            onChange={handleStatusChange}
          />
            </StatusBox>
            <SearchBox>
            <SearchContainer>
                <SearchIcon src={searchimg} />
                <SearchText>주문번호 검색</SearchText>
                <Searchbar>텍스트를 입력하세요</Searchbar>
            </SearchContainer>
            <SearchButton>조회</SearchButton>
            </SearchBox>
            </SubHeadContainer>
            <TableBox><Table/></TableBox>
        </Container>


    );
}

export default OrderBox;

const Container = styled.div`
  min-height: 64.5rem;
  min-width: 100rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;


const HeadContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 79.8125rem;
    align-self: left-end;

`;


const Header = styled.div`
    heigh: 2.25rem;
    color: #000;
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

const SubHeader = styled.p`
    color: var(--navy, #043277);
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    padding-top: 1.31rem;
`;

const SubHeadContainer = styled.div`
    display: flex;
    flex-direction: raw;
    width: 79.8125rem;
    justify-content: space-between;
    padding-top: 3rem;

`;

const StatusBox = styled.div`
    display: flex;
    flex-direction: column;
    align-self: left-end;
`;

const StatusTitle = styled.p`
    color: var(--black, #000);
    font-family: Pretendard;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 142.857% */
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

const SearchBox = styled.div`
  display: flex;
  flex-direction: raw;
  height: 2.875rem;
  align-items: center;
`;

const SearchContainer = styled.div`
  display: flex;
  flex-direction: raw;
  width: 26.8125rem;
  height: 2.875rem;
  align-items: center;
  gap: 0.5rem;
`;

const SearchIcon = styled.img`
    width: 1.24138rem;
    height: 1.25rem;
`;

const SearchText = styled.p`

    color: #000;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 125% */

`;

const Searchbar = styled.div`

    display: flex;
    padding: 0.4375rem 10.9375rem 0.4375rem 0.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.1875rem;
    border: 1px solid var(--dark-grey, #BCBCBC);
    background: #FFF;
    color: var(--dark-grey, #BCBCBC);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */

`;

const SearchButton = styled.button`
    display: flex;
    width: 4.125rem;
    height: 2.1875rem;
    justify-content: center;
    align-items: center;
    gap: 0.3125rem;
    flex-shrink: 0;
    border-radius: 0.1875rem;
    background: var(--navy, #043277);
    color: var(--white, #FFF);
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 125% */
`;

const TableBox = styled.div`

  height: 43.5rem;
  background: white;
  padding-top: 1.4rem;
`;

