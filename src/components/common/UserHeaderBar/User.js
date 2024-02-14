import styled from "styled-components";
import UserImage from "assets/images/adminuser.svg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const UserBox = styled.div`
  width: 5rem;
  height: 1.5rem;
  display: flex;
  /* align-items: center; */
`;
const UserImg = styled.div`
  width: 2rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
`;
const Image = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
`;

const UserName = styled.div`
  width: 3rem;
  font-size: 13px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function User() {
  //user name을 받아오기
  const userName = localStorage.getItem("name");
  const navi = useNavigate();

  return (
    <UserBox
      onClick={() => {
        navi("/user/mypage/order");
      }}
    >
      <UserImg>
        <Image src={UserImage} />
      </UserImg>
      <UserName>{userName}</UserName>
    </UserBox>
  );
}
export default User;
