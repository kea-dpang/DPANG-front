import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const UserInfoPage = () => {

    const infoTitles = ['사원번호', '이름', '이메일', '입사일'];
    const [infoData, setInfoData] = useState({
        memberId: '12345678',
        name: '디팡이',
        email: 'dpang1@naver.com',
        date: '2024.01.01'
    })

    return (
        <Wrap>
            <Title>
                <h1 className='cm-LBold30'>회원 정보</h1>
            </Title>
            <Info>
                {Object.keys(infoData).map((infoAtt, index) => ( // infoData 객체의 '속성 이름'들을 배열로 반환
                    <InfoItem key={index} className='cm-SRegular18'>
                        <h1>{infoTitles[index]}</h1>
                        <p>{infoData[infoAtt]}</p>
                    </InfoItem>
                ))}
            </Info>
            <Leave className='.cm-SRegular18'>
                <button>회원 탈퇴 {">"}</button>
            </Leave>
            <Link to='editpassword' className='Btn_M_Navy'>비밀전호 재설정</Link>
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
    background: var(--light-grey, #F4F4F4);
    display: flex;
    gap: 8rem;

    padding: 1.19rem 2.75rem;
`;
const Leave = styled.div`
   color: var(--dark-grey, #BCBCBC);

   display: flex;
   justify-content: flex-end;
   button {
    background: none;
   }

   padding: 1.25rem 0 3rem 0;
`;