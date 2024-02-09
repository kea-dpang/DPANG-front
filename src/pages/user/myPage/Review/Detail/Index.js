import { propsToClassKey } from '@mui/styles'
import styled from 'styled-components'
import Rating from "@mui/material/Rating";

const Container = styled.div`

width: 100vw;
height: 100vh;

position: fixed;
top: 0;
left: 0;
right: 0;
bottom: 0;
display: flex;
justify-content: center;
align-items: center;
background-color: rgba(0, 0, 0, 0.5);
z-index: 99;
overflow-x: hidden;
overflow-y: hidden;

`

const PopUpHeader = styled.div`

height: 10rem;
width: 35rem;
display: flex;
justify-content: space-between;
align-items: center;

`
const PopUpBox = styled.div`

position: fixed;
width: 40rem;
height: 50rem;
border-radius: 10px;
background-color: white;
z-index: 100;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`
const ItemInfoBox = styled.div`

height: 7rem;
width: 35rem;
display: flex;
align-items: center;
justify-content: start;

`

const ReviewInfoBox = styled.div`

width: 40rem;
height: 30rem;
display: flex;
flex-direction: column;
align-items: center;

`

const ItemImg = styled.img`

width: 5rem;
height: 5rem;

`
const ColHeader = styled.div`

width: ${(props) => props.width};
height: ${(props)=>props.height};
background-color: var(--light-grey);
display: flex;
align-items: center;
justify-content: center;

`

const Col = styled.div`

display: flex;
align-items: center;
justify-content: start;
width: 23rem;
box-sizing: border-box;

`
const Border = styled.div`

border-bottom: 1px solid black;
width: 35rem;

`
const Blank = styled.div`

height: 5rem;

`
const Row = styled.div`

display: flex;
flex-direction: row;
width: 35rem;
height: ${(props)=>props.height}
align-items: space-between;
justify-content: space-between;
`

function Index({ value, handleClose }) {

    console.log(value)

    return (
        <Container onClick={handleClose}>
            <PopUpBox onClick={(e) => { e.stopPropagation(); }}>
                <PopUpHeader>
                    
                    <p className="cm-MBold24">리뷰 내역</p>
                    <p onClick={handleClose}>✖</p>
                </PopUpHeader>
                <Border />

                <Blank />

                <Border />
                <ColHeader width="35rem" className="cm-SBold18" height="3rem">아이템 정보</ColHeader>
                <Border />
                <ItemInfoBox>
                <div style={{width: "2rem"}} />
                    <ItemImg src={value.itemThumbnailImage} />
                    <p style={{marginLeft: "2rem"}} className="cm-SRegular16">{value.itemName}</p>
                </ItemInfoBox>
                <Border />
                <Blank />
                <ReviewInfoBox>
                <Border />
                    <Row height="5rem">
                    
                        <ColHeader width="10rem" className="cm-SBold16" height="5rem">별점</ColHeader>
                        <Col>
                        <Rating name="read-only" value={value.rating} readOnly />
                        </Col>
                    </Row>
                    <Border />
                    <Row height="15rem">
                        <ColHeader width="10rem" className="cm-SBold16" height="15rem">내용</ColHeader>
                        <Col className="cm-SRegular16">
                            {value.content}
                        </Col>

                    </Row>
                    <Border />
                </ReviewInfoBox>

            </PopUpBox>



        </Container>




    )



}

export default Index;