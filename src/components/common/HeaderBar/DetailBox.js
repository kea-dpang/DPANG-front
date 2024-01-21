import styled from 'styled-components'

const DetailedBox = styled.div`
  width: 11rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`

margin-bottom: 1rem;


`
const SubCategoty = styled.p`

font-size: 14px;
margin-bottom: 12px;

`

function DetailBox(props){

    return(

        <DetailedBox>
           <Title className="cm-SBold18">{props.content.title} &gt; </Title>

           {props.content.content.map((a) => {

            return(
            <SubCategoty className="cm-SRegular16 ">{a}</SubCategoty>

            )

           })}
           
        </DetailedBox>


    )

}
export default DetailBox;
