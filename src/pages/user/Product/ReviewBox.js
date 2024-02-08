import React from "react";
import styled from "styled-components";
import Rating from "@mui/material/Rating";
import { customDate } from "assets/CustomName";

const ReviewBox = (props) => {
  // 김** 으로 이름 표시하기
  const name =
    props.value.reviewerName[0] +
    "*".repeat(props.value.reviewerName.length - 1);
  return (
    <Wrap className="cm-SRegular18">
      <UserWrap>
        <Name> {name} </Name>
        <Rating
          style={{ zIndex: -1 }}
          name="read-only"
          value={props.value.rating}
          readOnly
        />
      </UserWrap>
      <ContextWrap>
        <div> {props.value.content} </div>
        <div className="cm-SRegular16 col-DarkGrey">
          {customDate(props.value.createdTime)}
        </div>
      </ContextWrap>
    </Wrap>
  );
};

export default ReviewBox;

const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 68.25rem;
  padding: 2.375rem 3.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  align-items: flex-start;
  border-top: 1px solid var(--semi-light-grey);
  border-bottom: 1px solid var(--semi-light-grey);
  line-height: 1.8125rem;
`;
const UserWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-item: center;
`;
const ContextWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding-left: 3rem;
  gap: 1rem;
`;
const Name = styled.div`
  width: 3rem;
`;
