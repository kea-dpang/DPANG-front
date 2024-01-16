import styled from 'styled-components'

const ShortCutBox = styled.div`

width: 14rem;
height: 1.5rem;
display: flex;
jusfity-content: center;
align-items: center;

`
const Link = styled.div`

width: 3.3rem;
text-align: center;
font-size: 14px;

`

function ShortCut(){

    return(

        <ShortCutBox>
            <Link>홈</Link>
            <Link>신상품</Link>
            <Link>베스트</Link>
            <Link>이벤트</Link>
        </ShortCutBox>

    )



}
export default ShortCut;