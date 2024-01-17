import styled from 'styled-components'

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

height: ${(props)=>props.height};
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

width: 50rem;
height: 10rem;
resize: none;
outline: none;
padding: 10px;

`
const FormBox = styled.div`

width: 50rem;


`

const Form = styled.select`

width: 10rem;
height: 2.5rem;

`

function RequestTable() {

    return (
        <>
        <DetailHeader className="cm-SRegular16">취소 상세 내역</DetailHeader>
        <Container>
            <Border />
            <TableBox>
                <Row height="6rem">
                <ColHeader height="6rem">취소 사유</ColHeader>
                    <Col width="62rem" height="6rem">
                        <FormBox>
                        <Form>
                            <option value = "단순 변심">단순변심</option>
                            <option value = "사이즈 안맞음">사이즈 안맞음</option>
                            <option value = "제품 불만족">제품 불만족</option>
                            <option value = "제품 오배송">제품 오배송</option>
                            <option value = "기타">기타</option>

                        </Form>
                        </FormBox>
                        </Col>
                </Row>

                <Border />

                <Row height="15rem">
                    <ColHeader height="15rem">비고</ColHeader>
                    <Col width="62rem" height="15rem"><TextArea /></Col>
                </Row>
                <Border />

            </TableBox>




        </Container>


        </>
    )

}
export default RequestTable;