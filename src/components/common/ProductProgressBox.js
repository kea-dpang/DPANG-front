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

width: 40rem;
height: 4rem;
display: flex;
justify-content: space-between;

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

function Index(props) {

    return (

        <Container>
            진행중인 주문
            <Box>
                <StatusBox>
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
            </Box>
        </Container>



    )


}

export default Index;   