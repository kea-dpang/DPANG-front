import React from 'react';
import styled from 'styled-components';
import UserSideBar from '../../../components/common/UserSideBar';
// import SubSection from './userInfo/SubSection';
import { Outlet } from 'react-router-dom';
import media from '../../../styles/responsive';

const MyPage = () => {
    return (
        <div>
            {/* <Wrap> */}
                <Wrap2>
                    <Header/>
                    <Nav/>
                    <Wrap3>
                    <Section>
                        <UserSideBar/>
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
    background-color: dimgray;

    width: 100vw;
    max-width: 100%;
    box-sizing: border-box; // 100vw를 주고, padding을 주니까 가로스크롤이 생기므로

    min-width: 1550px;
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

const Wrap3 = styled.div`
    /* padding: 0rem 12rem; */
    padding: 0 calc(15vw - 200px);
`;
const Section = styled.div`
    background-color: yellow;

    display: flex;
    justify-content: center;

`;

const SubSection = styled.div`
    background-color: beige;
    
    flex: 4;
`;