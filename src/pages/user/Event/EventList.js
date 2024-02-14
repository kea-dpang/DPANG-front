import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const EventList = ({ data, isLink }) => {
  console.log("data: ", data);
  return (
    <>
      {isLink ? (
        <Wrap
          to={`/user/collections/event/${data.id}`}
          state={{
            title: data.eventName,
            sellerId: data.sellerId,
            id: data.id,
          }}
        >
          <EventImg $imgUrl={encodeURI(data.imagePath)} />
          <TestWrap>
            <div className="cm-SBold18">{data.eventName}</div>
            <div className="cm-SRegular16">
              {data.startDate} ~ {data.endDate}
            </div>
          </TestWrap>
        </Wrap>
      ) : (
        <Wrap>
          <EventImg $imgUrl={encodeURI(data.imagePath)} />
          <TestWrap>
            <div className="cm-SBold18">{data.eventName}</div>
            <div className="cm-SRegular16">
              {data.startDate} ~ {data.endDate}
            </div>
          </TestWrap>
        </Wrap>
      )}
    </>
  );
};

export default EventList;

const Wrap = styled(Link)`
  display: flex;
  padding: 1.4375rem 2.0625rem;
  flex-direction: column;
  align-items: flex-start;
  color: inherit;
`;
const EventImg = styled.div`
  width: 28.8125rem;
  height: 8.375rem;
  // background: url(${(props) =>
    props.$imgUrl}) center center / contain no-repeat;
  background: url(${(props) => props.$imgUrl}) center center / cover no-repeat;
`;
const TestWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  gap: 0.5rem;
`;
