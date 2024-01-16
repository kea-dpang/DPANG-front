import React from 'react';
import styled from 'styled-components';
import UserSideBar from '../../../components/common/UserSideBar';
// import SubSection from './userInfo/SubSection';
import { Outlet } from 'react-router-dom';
import media from '../../../styles/responsive';
import Header from '../../../components/common/HeaderBar/Index'

const MyPage = () => {
    return (
        <div>
            {/* <Wrap> */}
                <Wrap2>
                    <Header/>
                    <Nav/>
                    <Wrap3>
                    <Section>
                        <UserSideBar />
                        <SubSection>
                            <Outlet />
                        </SubSection>
                    </Section>
                    </Wrap3>
                    <Header/>
                </Wrap2>
            {/* </Wrap> */}
        </div>
    );
};

export default MyPage;

const Wrap = styled.div`
    /* padding: 0rem 12rem; */
    /* padding: 0 calc(15vw - 200px); */
`;
const Wrap2 = styled.div`
    width: 100vw;
    max-width: 100%;
    box-sizing: border-box; // 100vw를 주고, padding을 주니까 가로스크롤이 생기므로

    min-width: 1550px;
`;

const Nav = styled.div`
    background-color: var(--dark-grey);
    
    height: 19.5625rem;
`;

const Wrap3 = styled.div`
    /* padding: 0rem 12rem; */
    /* padding: 0 calc(15vw - 200px); */
`;
const Section = styled.div`
    display: flex;
    justify-content: center;

`;

const SubSection = styled.div`
    border: 1px solid black;
    /* flex: 4; */
    width: 72rem;
`;