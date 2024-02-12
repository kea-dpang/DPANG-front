import styled from 'styled-components'
const Container = styled.div`

width: 72rem;
height: 14rem;
display: flex;
flex-direction: column;
justify-content: center;

`

const Box = styled.div`

width: 72rem;
height: 12.5rem;
background-color: var(--light-grey);
display: flex;
align-items: center;
justify-content: center;

`
const StatusBox = styled.div`

width: ${(props) => props.width};
height: ${(props) => props.height};
display: flex;
justify-content: ${(props) => props.align};
align-items: end;

`

const Status = styled.div`

width: 4rem;
height: 4rem;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const StatusCircle = styled.div`

background-color: var(--semi-light-grey);
width: 3rem;
height: 3rem;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;

`
const ArrowBox = styled.div`

width: 3rem;
height: 4rem;
display: flex;
align-items: center;
justify-content: center;


`

const Refund = styled.div`

width: 8rem;
height: 2rem;
display: flex;
justify-content: center;
align-items: center

`

function Index(props) {

    return (

        <Container>
            주문 진행 현황
            <Box className="cm-SRegular16">
                <StatusBox width="16rem" height="1rem" />
                <StatusBox width="40rem" height="4rem" align="space-between">
                    <Status>결제완료<StatusCircle>{props.amt[0]}</StatusCircle></Status>
                    <ArrowBox className="cm-MBold24">&#62;</ArrowBox>
                    <Status>배송요청<StatusCircle>{props.amt[1]}</StatusCircle></Status>
                    <ArrowBox className="cm-MBold24">&#62;</ArrowBox>
                    <Status>배송준비<StatusCircle>{props.amt[2]}</StatusCircle></Status>
                    <ArrowBox className="cm-MBold24">&#62;</ArrowBox>
                    <Status>배송중<StatusCircle>{props.amt[3]}</StatusCircle></Status>
                    <ArrowBox className="cm-MBold24">&#62;</ArrowBox>
                    <Status>배송완료<StatusCircle>{props.amt[4]}</StatusCircle></Status>
                </StatusBox>
                <StatusBox width="16rem" height="12.5rem" align="end"><Refund>취소/환불 {props.amt[5]}</Refund></StatusBox>
            </Box>
        </Container>
    )
}

export default Index;   