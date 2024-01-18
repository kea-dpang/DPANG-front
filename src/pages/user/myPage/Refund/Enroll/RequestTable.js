import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
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
height: 10rem;
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

    const navi = useNavigate();
    const [category, setCategory] = useState("");
    const [text, setText] = useState("");

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
                                    <option value="단순 변심">단순변심</option>
                                    <option value="사이즈 안맞음">사이즈 안맞음</option>
                                    <option value="제품 불만족">제품 불만족</option>
                                    <option value="제품 오배송">제품 오배송</option>
                                    <option value="기타">기타</option>

                                </Form>
                            </FormBox>
                        </Col>
                    </Row>

                    <Border />

                    <Row height="15rem" className="cm-SRegular16">
                        <ColHeader height="15rem" className="cm-SBold16">비고</ColHeader>
                        <Col width="62rem" height="15rem">
                            <TextArea className="cm-SRegular16" onChange={(e)=>{setText(e.target.value)}}/>
                        </Col>
                    </Row>
                    <Border />

                </TableBox>

            </Container>
            <ButtonBox>
                <Button className="cm-SBold16" onClick={() => { console.log(category + "\\" + text); navi('/user/mypage/temp/order'); }}>반품 신청</Button>
            </ButtonBox>


        </Wrapper>
    )

}
export default RequestTable;