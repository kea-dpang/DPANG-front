import React from 'react';
import styled from 'styled-components';
import UserSideBar from '../../../components/common/UserSideBar';
// import SubSection from './userInfo/SubSection';
import { Outlet } from 'react-router-dom';

const MyPage = () => {
    return (
        <div>
            <Wrap>
                <Header/>
                <Nav/>
                <Section>
                    <UserSideBar/>
                    <SubSection>
                        <Outlet />
                    </SubSection>
                </Section>
                <Header/>
            </Wrap>
        </div>
    );
};

export default MyPage;

const Wrap = styled.div`
    background-color: red;

    width: 100vw;
    max-width: 100%;

    box-sizing: border-box; // 100vw를 주고, padding을 주니까 가로스크롤이 생기므로
    padding: 0rem 12rem;

`;

/* temp */
const Header = styled.div`
    background-color: var(--light-grey);

    /* width: 96.25rem; */
    height: 2.875rem;
    padding: 0.8125rem 0rem;
`;
const Nav = styled.div`
    background-color: var(--dark-grey);
    
    margin: 5.6rem 0 0 0;
    height: 19.5625rem;
`;
const Section = styled.div`
    background-color: yellow;

    display: flex;
`;

const SubSection = styled.div`
    background-color: beige;

    height: 38.375rem;
    flex: 4;
`;