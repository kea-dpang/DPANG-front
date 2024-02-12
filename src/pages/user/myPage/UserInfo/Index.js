import { useUser } from "@api/queries/user";
import { GET_User } from "@api/user";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const infoTitles = ["사원번호", "이름", "이메일", "입사일"];

const UserInfoPage = () => {
  // const [infoData, setInfoData] = useState();

  // useEffect(() => {
  //   GET_User()
  //     .then((data) => {
  //       console.log("일단 확인해보자.", data.data);
  //       setInfoData(data.data);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // }, []);
  const { data: infoData, isLoading, error } = useUser();

  return (
    <Wrap>
      <Title>
        <h1 className="cm-LBold30">회원 정보</h1>
      </Title>
      {infoData && (
        <Info>
          <InfoItem className="cm-SRegular18">
            <h1 style={{ width: "4rem" }}>사원번호</h1>
            <p>{infoData.employeeNumber}</p>
          </InfoItem>
          <InfoItem className="cm-SRegular18">
            <h1 style={{ width: "4rem" }}>이름</h1>
            <p>{infoData.name}</p>
          </InfoItem>
          <InfoItem className="cm-SRegular18">
            <h1 style={{ width: "4rem" }}>이메일</h1>
            <p>{infoData.email}</p>
          </InfoItem>
          <InfoItem className="cm-SRegular18">
            <h1 style={{ width: "4rem" }}>입사일</h1>
            <p>{infoData.joinDate}</p>
          </InfoItem>
        </Info>
      )}
      <Leave className=".cm-SRegular18">
        <Link to="leave">회원 탈퇴 {">"}</Link>
      </Leave>
      <Link to="editpassword" className="Btn_M_Navy">
        비밀번호 재설정
      </Link>
    </Wrap>
  );
};

export default UserInfoPage;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  height: 8rem;
  align-items: center;

  border-bottom: 1px solid var(--black);
`;
const Info = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.06rem;
`;
const InfoItem = styled.div`
  background: var(--light-grey, #f4f4f4);
  display: flex;
  gap: 8rem;

  padding: 1.19rem 2.75rem;
`;
const Leave = styled.div`
  display: flex;
  justify-content: flex-end;

  a:link,
  a:visited {
    color: var(--dark-grey, #bcbcbc);
    background: none;
  }

  padding: 1.25rem 0 3rem 0;
`;
