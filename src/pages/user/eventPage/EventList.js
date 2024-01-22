import React from 'react';
import styled from 'styled-components';

const EventList = ({data}) => {
    return(
        <>
            <Wrap>
                <EventImg $imgUrl={data.eventBannerUrL}/>
                <TestWrap>
                    <div className='cm-SBold18'>{data.title}</div>
                    <div className='cm-SRegular16'>{data.startDate.substring(0,10)} ~ {data.endDate.substring(0,10)}</div>
                </TestWrap>
            </Wrap>
        </>
    )
};

export default EventList;

const Wrap = styled.div`
    display: flex;
    padding: 1.4375rem 2.0625rem;
    flex-direction: column;
    align-items: flex-start;
`
const EventImg = styled.div`
    width: 28.8125rem;
    height: 8.375rem;
    // background: url(${props => props.$imgUrl}) center center / contain no-repeat;
    background: url(${props => props.$imgUrl}) center center / cover no-repeat;

`
const TestWrap = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    gap: 0.5rem;
`