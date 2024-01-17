import styled from "styled-components";
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import { useState } from "react";
import { useNavigate } from "react-router-dom"

function EnrollTable() {

  const [value, setValue] = useState(5);
  const [text, setText] = useState("");
  const navi = useNavigate();
  const newReview = {star: "", text:""};

  return (
    <>

      <Table>
        <Border />

        <Box height="7rem">
          <ColBox height="7rem">평점</ColBox>
          <Content>
            <Rating name="star" value={value} onChange={(e, val) => {
              setValue(val);
            }}
            />
          </Content>
        </Box>

        <Border />
        <Box height="19rem">
          <ColBox height="19rem">리뷰 작성</ColBox>
          <InputBox>
            <TextArea className = "cm-SRegular16" onChange={(e)=>{setText(e.target.value);}}/>
          </InputBox>
        </Box>
        <Border />
      </Table>

      <ButtonBox>
        <Button className="cm-SBold16" onClick={()=>{newReview.star = value; newReview.text = text; navi('/user/mypage/temp/order'); }}>리뷰 등록</Button>
      </ButtonBox>
    </>
  );
}


const Table = styled.div`
  width: 72rem;
  height: 26rem;
  margin-top: 2rem;
  z-index: 5;
`;
const Border = styled.div`

width: 72rem;
border-bottom: 1px black solid;

`
const Box = styled.div`
  height: ${(props) => props.height};
  width: 72rem;
  display: flex;
  
`;

const ColBox = styled.div`

heigth: ${(props) => props.height};
width: 10rem;
background-color: var(--light-grey);
display: flex;
justify-content: center;
align-items: center;
z-index: 1;

`
const InputBox = styled.div`

height: ${(props) => props.height};
width: 62rem;
display: flex;
align-items: center;
justify-content: center;

`

const TextArea = styled.textarea`

width: 58rem;
height: 16rem;
resize: none;
outline: none;
padding: 10px;

`

const Content = styled.div`

width: 62rem;
height: 6rem;
display: flex;
align-items: center;
margin-left: 2rem;

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

export default EnrollTable;