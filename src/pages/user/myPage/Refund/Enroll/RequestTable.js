import { POST_refund_order } from '@api/refund'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'

const Wrapper = styled.div`

width: 72rem;
height: 50rem;

`

const Container = styled.div`

width: 72rem;

`
const Border = styled.div`

height: 1px;
width: 72rem;
background-color: black;


`

const TableBox = styled.div`

width: 72rem;

`
const Row = styled.div`

height: ${(props) => props.height};
width: 72rem;
display: flex;

`
const ColHeader = styled.div`

width: 10rem;
height: ${(props) => props.height};
background-color: var(--light-grey);
display: flex;
align-items: center;
justify-content: center;

`

const Col = styled.div`

height: ${(props) => props.height};
width: ${(props) => props.width};
display: flex;
align-items: center;
justify-content: center;


`
const DetailHeader = styled.div`

width: 72rem;
height: 5rem;
background-color: white;
display: flex;
align-items: end;

`
const TextArea = styled.textarea`

width: 55rem;
height:${(props)=>props.height};
resize: none;
outline: none;
padding: 10px;

`
const FormBox = styled.div`

width: 55rem;


`

const Form = styled.select`

width: 10rem;
height: 2.5rem;


`

const Button = styled.button`

width: 11rem;
height: 3rem;
background-color: var(--navy);
color: white;
border-radius: 3px;

`

const ButtonBox = styled.div`

width: 72rem;
display: flex;
height: 10rem;
justify-content: end;
align-items: end;


`

function RequestTable() {
    const { id } = useParams();
    console.log(id);

    const navi = useNavigate();
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = () =>{

        console.log(category)

        const val = {
            orderId: id, 
            refundCategory: category, 
            refundMessage: text, 
            refundShipmentMessage: message, 

        }

        POST_refund_order(val)
        .then((data)=>{
            console.log("성공~", data);
        })
        .catch((error)=>{
            console.log("실패실패", error)
        })


    }

    return (
        <Wrapper>
            <DetailHeader className="cm-SRegular16">취소 신청하기</DetailHeader>
            <Container>
                <Border />
                <TableBox className="cm-SRegular16">
                    <Row height="6rem">
                        <ColHeader height="6rem" className="cm-SBold16">취소 사유</ColHeader>
                        <Col width="62rem" height="6rem">
                            <FormBox>
                                <Form onChange={(e)=>{setCategory(e.target.value)}}>
                                    <option value="SIMPLE_CHANGE">단순변심</option>
                                    <option value="SIZE_NOT_MATCH">사이즈 안맞음</option>
                                    <option value="PRODUCT_DISCONTENT">상품 불만족</option>
                                    <option value="WRONG_DELIVERY">제품 오배송</option>
                                    <option value="DELIVERY_DELAY">배송지연</option>
                                    <option value="OTHERS">기타</option>

                                </Form>
                            </FormBox>
                        </Col>
                    </Row>

                    <Border />

                    <Row height="15rem" className="cm-SRegular16">
                        <ColHeader height="15rem" className="cm-SBold16">비고</ColHeader>
                        <Col width="62rem" height="15rem">
                            <FormBox>
                            <TextArea height = "10rem" className="cm-SRegular16" onChange={(e)=>{setText(e.target.value)}}/>
                        </FormBox>
                        </Col>
                    </Row>
                    <Border />

                    <Row height="10rem" className="cm-SRegular16">
                        <ColHeader height="10rem" className="cm-SBold16">회수 메시지</ColHeader>
                        <Col width="62rem" height="10rem">
                        <FormBox>
                            <TextArea height="6rem" className="cm-SRegular16" onChange={(e)=>{setMessage(e.target.value)}}/>
                            </FormBox>
                        </Col>
                    </Row>
                    <Border />

                </TableBox>

            </Container>
            <ButtonBox>
                <Button className="cm-SBold16" onClick={() => { handleSubmit(); navi('/user/mypage/order'); }}>반품 신청</Button>
            </ButtonBox>


        </Wrapper>
    )

}
export default RequestTable;