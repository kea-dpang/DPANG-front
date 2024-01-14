import styled from 'styled-components'

const DetailedBox = styled.div`
  width: 11rem;
  height: 23rem;
`;

const Title = styled.p`



`
const SubCategoty = styled.p`

font-size: 14px;

`

function DetailBox(props){

    return(

        <DetailedBox>
           <Title>{props.content.title} &gt; </Title>

           {props.content.content.map((a) => {

            return(
            <SubCategoty>{a}</SubCategoty>

            )

           })}
           
        </DetailedBox>


    )

}
export default DetailBox;
