import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const infoTitles = ["사원번호", "이름", "이메일", "입사일"];

const UserInfoPage = () => {
  const [infoData, setInfoData] = useState({
    memberId: "12345678",
    name: "디팡이",
    email: "dpang1@naver.com",
    date: "2024.01.01",
  });

  return (
    <Wrap>
      <Title>
        <h1 className="cm-LBold30">회원 정보</h1>
      </Title>
      <Info>
        {Object.keys(infoData).map(
          (
            infoAtt,
            index // infoData 객체의 '속성 이름'들을 배열로 반환
          ) => (
            <InfoItem key={index} className="cm-SRegular18">
              <h1 style={{ width: "4rem" }}>{infoTitles[index]}</h1>
              <p>{infoData[infoAtt]}</p>
            </InfoItem>
          )
        )}
      </Info>
      <Leave className=".cm-SRegular18">
        <Link to="leave">회원 탈퇴 {">"}</Link>
      </Leave>
      <Link to="editpassword" className="Btn_M_Navy">
        비밀전호 재설정
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
