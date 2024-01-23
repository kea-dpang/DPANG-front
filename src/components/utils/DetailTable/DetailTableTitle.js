import styled from 'styled-components'
import arrow from '../../../assets/images/UpArrowVector.svg'
import { useState } from 'react';

const DetailHeader = styled.div`
  height: 1rem;
  width: ${(props)=>props.width};
  background-color: white;
  display: flex;
  align-items: end;
  justify-content: space-between;
  border-bottom: 1px dashed black;
  margin-bottom: 1rem;
`;

const ArrowImage = styled.img`

height: 1rem;
width: 1rem;
transform: rotate(${(props)=>props.rotate}deg);
transition: transform 0.3s ease;

`

function DetailTableTitle(props) {

  const [rotate, setRotate] = useState(180)


    return( <DetailHeader className="cm-SRegular18" width={props.width}>
      
      
      {props.text}
      
      <ArrowImage src={arrow} rotate={rotate} onClick={()=>{setRotate(rotate+180); props.handleclick(); }}/>
      
      </DetailHeader>
    
)

}
export default DetailTableTitle;
