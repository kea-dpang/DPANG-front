import styled from "styled-components";
import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import data from "assets/data/user/UserWishData";
import Checkbox from '@mui/material/Checkbox';
import carticon from "assets/images/carticon.png";
import '../../../styles/fonts.css';
import List from './List';
import Header from '../../../components/common/UserHeaderBar/Index';




const Index = () => {

  

    return(

        <Wrap>
            <Header/>
            <Title className="cm-LBold30 col-DarkNavy">❤️ 내가 찜한 상품</Title>
            <InputSection>
                <List/>
            </InputSection>
        </Wrap>
    );
};

export default Index;


const Wrap = styled.div`
  width: 100vw;
  align-items: center;
  min-width: 1550px;
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  align-items: center;
  padding: 2.25rem 15.9375rem 2.25em 15.9375rem;
`;

const InputSection = styled.div`
  display: flex;
  width: 66.25rem;
  min-height: calc(100vh - 30rem);
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  flex-direction: column;
  align-items: center;
  gap: 2.3125rem;
  justify-content: center;
  padding: 2.25rem 15.9375rem 2.25em 15.9375rem;
`;
