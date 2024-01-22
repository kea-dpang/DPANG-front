import styled from 'styled-components';
import { Link } from 'react-router-dom';
const ShortCutBox = styled.div`

width: 14rem;
height: 1.5rem;
display: flex;
jusfity-content: center;
align-items: center;

`
const StyledLink = styled(Link)`
    width: 3.3rem;
    text-align: center;
    font-size: 14px;
    text-decoration: none;
    color: inherit;
    transition: transform 0.3s ease-in-out;

    &:hover{
        color: var(--navy);
        transform: scale(1.1);
    }
`

function ShortCut(){

    return(

        <ShortCutBox>
            <StyledLink to='/user/mainpage'>홈</StyledLink>
            <StyledLink>신상품</StyledLink>
            <StyledLink to='/user/collections/best'>베스트</StyledLink>
            <StyledLink to='/user/collections/event'> 이벤트</StyledLink>
        </ShortCutBox>

    )



}
export default ShortCut;