import styled from 'styled-components'
import search from "../../../../assets/images/search.svg"
import StoreTable from "./Table"

const Index = () => {
    
    return(

        
        <Container>
            <Header>상품 관리</Header>
            <SubHeader>판매처 조회</SubHeader>
            <HeadItem>
                <SearchContainer>
                    <SearchIcon src={search}/>
                    <SearchBar>
                        <SearchText>텍스트를 입력하세요</SearchText>
                    </SearchBar>
                    <CheckButton>조회</CheckButton>
                </SearchContainer>
                <AddStoreButton>+ 판매처 추가하기</AddStoreButton>
            </HeadItem>
            <StoreTableBox>
            <StoreTable/>
            </StoreTableBox>
            <DeleteButton>선택삭제</DeleteButton>
        </Container>


    );

}

export default Index;


const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Header = styled.div`
    background-color: white;
    display: flex;
    align-items: center;
    width: 7.3125rem;
    color: #000;
    font-family: Pretendard;
    font-size: 1.875rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`;

const SubHeader = styled.div`

    display: flex;
    width: 79.75rem;
    padding: var(--hi, 0.625rem) var(--hi, 72.25rem) var(--hi, 0.625rem) var(--hi, 0.625rem);
    align-items: center;
    gap: var(--hi, 0rem);

    color: var(--navy, #043277);
    font-family: Pretendard;
    font-size: 1.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;

`;

const HeadItem = styled.div`
display: flex;
flex-direction: raw;

`;


const SearchContainer = styled.div`
    display: flex;
    width: 26.8125rem;
    align-items: center;
    gap: 0.875rem;
`;

const SearchIcon = styled.img`

    width: 1.24138rem;
    height: 1.25rem;

`;

const SearchBar = styled.div`

    display: flex;
    height: 2.1875rem;
    padding: 0.4375rem 10.9375rem 0.4375rem 0.875rem;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    border-radius: 0.1875rem;
    border: 1px solid var(--dark-grey, #BCBCBC);
    background: #FFF;

`;

const SearchText = styled.p`

    color: var(--dark-grey, #BCBCBC);
    font-family: Pretendard;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem; /* 166.667% */

`;

const CheckButton = styled.button`

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

const AddStoreButton = styled.button`

    display: flex;
    width: 14.5625rem;
    height: 2.8125rem;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem; /* 100% */
    letter-spacing: 0.125rem;

`;

const StoreTableBox = styled.div`
    height: 43rem;
    background-color: white;
  `;

const DeleteButton = styled.button`

    display: flex;
    width: 13.375rem;
    height: 2.4375rem;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: #FFF;
    text-align: center;
    font-family: Pretendard;
    font-size: 1rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.25rem; /* 125% */
    letter-spacing: 0.1rem;

`;




