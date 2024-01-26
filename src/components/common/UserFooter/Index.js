import styled from 'styled-components'

const Container = styled.div`

width: 100vw;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const BorderBar = styled.div`

width: 89rem;
height: 0.5rem;
background-color: var(--navy);


`

function Index(){

return(

    <Container>
    <BorderBar />
    Copyright 2024 DPANG all rights reserved
    </Container>

)


}
export default Index;
