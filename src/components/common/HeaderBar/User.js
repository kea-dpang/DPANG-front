import styled from "styled-components";
import UserImage from "../../../assets/images/adminuser.svg";
import { useState } from "react";

const UserBox = styled.div`
  width: 5rem;
  height: 1.5rem;
  display: flex;
`;
const UserImg = styled.div`
  width: 2rem;
  height: 1.5rem;
`;
const Image = styled.img`
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  
`;

const UserName = styled.div`
  width: 3rem;
  font-size: 14px;
  display: flex;
  align-items: center;
  justify-content: center;

`;

function User() {

    const [user, setUser] = useState('김디팡')

  return (
    <UserBox>
      <UserImg>
        <Image src={UserImage} />
      </UserImg>
      <UserName>{user}</UserName>
    </UserBox>
  );
}
export default User;
