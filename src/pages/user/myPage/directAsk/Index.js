import React from 'react';
import styled from 'styled-components';
import '../../../../styles/fontStyle.scss';
import PeriodSelector from '../../../../components/common/PeriodSelector';

const DirectAskPage = () => {
    return (
        <Wrap>
            <Title>
                <h1 className='cm-LBold30'>1:1 문의</h1>
            </Title>

            <Period>
                <p className='cm-SRegular18'>나의 문의 내역</p>
                <PeriodSelector/>
            </Period>
        </Wrap>
    );
};

export default DirectAskPage;

const Wrap = styled.div`
    background-color: blueviolet;

`;
const Title = styled.div`
    /* padding-top: 3.375rem; */
    display: flex;
    /* width: 72.5rem; */
    height: 8rem;
    align-items: center;

    border-bottom: 1px solid var(--black);
`;
const Period = styled.div`
    background-color: darkkhaki;

    p {
        margin-top: 3rem;
    }
`;