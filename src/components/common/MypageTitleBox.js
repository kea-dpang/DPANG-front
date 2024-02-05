import React from "react";
import styled from "styled-components";
import { ReactComponent as ArrowStrokeVector } from "../../assets/images/arrowStrokeVector.svg";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import membermileImg from "../../assets/images/membermile.png";
import chargemileImg from "../../assets/images/chargemile.png";
import ProfileImg from "../../assets/images/profileImg.png";
import { GET_mileage } from "@api/mileage";
import { ReactComponent as MyPageProfile } from "@images/myPageProfile.svg";

const MypageTitleBox = () => {
  const navi = useNavigate();
  const [mileage, setMileage] = useState(0);
  const [personalChargedMileage, setPersonalChargedMileage] = useState(0);
  const userName = localStorage.getItem("userId");
  const userId = localStorage.getItem("userId");

  //처음에 페이지 로딩시 사용자의 회사 지급 마일리지, 개인 충전 마일리지를 return
  useEffect(() => {
    //초기 userID와 X-DPANG-CLIENT-ID 값을 넣어줌
    const clientId = 1;

    GET_mileage(userId, clientId)
      .then((data) => {
        // API 요청 성공
        console.log("Mileage Data:", data.data.mileage);
        // 사원 마일리지와 개인 충전 마일리지 값을 가져옴
        setMileage(data.data.mileage);
        setPersonalChargedMileage(data.data.personalChargedMileage);
      })
      .catch((error) => {
        // API 요청 실패
        console.error("Error fetching mileage data:", error);
      });
  }, []);

  const handleLogout = () => {
    navi("/login");
    // 로컬 스토리지 정보 삭제
    localStorage.clear();
    // 쿠키 정보 삭제
    document.cookie.split(";").forEach((c) => {
      document.cookie = c
        .replace(/^ +/, "")
        .replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/");
    });
  };

  return (
    <Mainbox>
      <MypageWrap>
        <Profilebox to="userInfo">
          <MyPageProfile />
          <Wrap2>
            <Nickname>김디팡님</Nickname>
            <button
              style={{ color: "var(--dark-grey)", background: "none" }}
              onClick={handleLogout}
            >
              로그아웃 &gt;
            </button>
          </Wrap2>
        </Profilebox>

        <MileContainer>
          <Mileboxcontainer>
            <Membermilebox to="">
              <MileText>
                <Miletitle>사원 마일리지</Miletitle>
                {/* 사원 마일리지 */}
                <Mile>{mileage.toLocaleString()} 마일</Mile>
              </MileText>
              <Mileimg src={membermileImg} />
              <StyledArrowStrokeVector />
            </Membermilebox>
            <Chargemilebox to="">
              <MileText>
                <Miletitle>충전 마일리지</Miletitle>
                {/* 개인 충전 마알리지 */}
                <Mile>{personalChargedMileage.toLocaleString()} 마일</Mile>
              </MileText>
              <Mileimg src={chargemileImg} />
              <StyledArrowStrokeVector />
            </Chargemilebox>
          </Mileboxcontainer>
          <Chargebox
            onClick={() => {
              navi("/user/mypage/mileage/req");
            }}
          >
            <Charge>마일리지 충전하기</Charge>
            <StyledArrowStrokeVector />
          </Chargebox>
        </MileContainer>
        <Askbox
          onClick={() => {
            navi("directask/enroll");
          }}
        >
          <Ask>1:1 문의하기</Ask>
          <StyledArrowStrokeVector />
        </Askbox>
      </MypageWrap>
    </Mainbox>
  );
};

export default MypageTitleBox;

const Mainbox = styled.div`
  /* width: 120rem; */
  height: 19.5625rem;
  flex-shrink: 0;
  background: var(--light-grey, #f4f4f4);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MypageWrap = styled.div`
  display: inline-flex;
  height: 10.4375rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1.3125rem;
  flex-shrink: 0;
`;

const Profilebox = styled.div`
  display: flex;
  padding: 3.25rem 5.625rem;
  align-items: center;
  align-content: flex-start;
  gap: 0.625rem var(--hi, 0.625rem);
  flex-wrap: wrap;
  background: var(--white, #fff);
`;

const ProfileIcon = styled.img`
  width: 3.9375rem;
  height: 3.9375rem;
  flex-shrink: 0;

  fill: var(--white, #fff);
  stroke-width: 3px;
  stroke: var(--navy, #043277);
`;

const Nickname = styled.p`
  width: 5.3125rem;
  height: 1.8125rem;
  color: #000;
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const MileContainer = styled.div`
  display: flex;
  width: 39.2875rem;
  height: 10.4375rem;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.75rem;
`;

const Mileboxcontainer = styled.div`
  display: flex;
  height: 6.1875rem;
  justify-content: center;
  align-items: flex-start;
  gap: 1.2125rem;
  flex-shrink: 0;
`;

const Membermilebox = styled.div`
  width: 15.3rem;
  height: 3.06rem;
  display: flex;
  padding: 1.5625rem 1.875rem;
  align-items: center;
  gap: 0.1875rem;
  background: var(--white, #fff);
`;

const MileText = styled.div`
  display: flex;
  flex-direction: column;
`;

const Miletitle = styled.p`
  width: 8.25rem;
  height: 1.75rem;
  color: var(--navy, #043277);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Mile = styled.p`
  width: 7.3125rem;
  height: 1rem;
  color: var(--black, #000);
  font-family: Pretendard;
  font-size: 1.0625rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Mileimg = styled.img`
  width: 3.0625rem;
  height: 3.0625rem;
`;

const Chargemilebox = styled.div`
  width: 15.3rem;
  height: 3.06rem;
  display: flex;
  padding: 1.5625rem 1.875rem;
  align-items: center;
  gap: 0.1875rem;
  background: var(--white, #fff);
`;

const Chargebox = styled.div`
  width: 35.5rem;
  height: 1rem;
  display: flex;
  padding: 1.25rem 1.875rem;
  align-items: center;
  gap: 7.25rem;
  background: var(--white, #fff);
`;

const Charge = styled.p`
  color: var(--navy, #043277);
  font-family: Pretendard;
  font-size: 1.125rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const Askbox = styled.div`
  display: flex;
  padding: 4.375rem 1.875rem;
  align-items: center;
  gap: 9.5rem;
  background: var(--white, #fff);
`;

const Ask = styled.p`
  width: 7.625rem;
  height: 1.6875rem;
  color: var(--navy, #043277);
  font-family: Pretendard;
  font-size: 1.5rem;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const StyledArrowStrokeVector = styled(ArrowStrokeVector)`
  width: 0.4125rem;
  height: 0.6875rem;
  fill: var(--navy, #043277);
`;

const Wrap2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
