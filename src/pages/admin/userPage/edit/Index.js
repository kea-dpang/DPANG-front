import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { userListData } from '../../../../assets/datas/AdminUserData';

const title = ["No.", "사원번호", "이름", "이메일", "입사일", "주소"]

const EditPage = () => {
    let params = useParams().memberId;
    const userData = userListData.find(data => parseInt(params));
    console.log(userData)
    console.log("hi~~~~v ");
    return (
        <Wrap>
            <Head>
                <h1 className='cm-SBold18'>회원 상세정보</h1>
                {/* <button className='Btn_S_Navy'>저장</button> */}
            </Head>
            <Main>
                {Object.entries(userData).map(([key, value], index) => ( //[key, value] 형태로 변환
                    <Item key={key}>
                        <h2 style={{width:'4rem'}}>{title[index]}</h2>
                        <p>{value}</p>
                    </Item>
                ))}            
            </Main>
            <button className='Btn_S_White'>삭제</button>
        </Wrap>
    );
};

export default EditPage;

const Wrap = styled.div`
    margin: 2rem 2rem;
    /* background-color: red; */
    display: flex;
    flex-direction: column;
    gap: 2rem;
`;
const Head = styled.div`
    border-bottom: 1px solid black;
    padding-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Main = styled.div`
    /* padding-top: 2.62rem; */

    display: flex;
    flex-direction: column;
    gap: 1.06rem;
`;
const Item = styled.div`
    display: flex;
    gap: 10.88rem;
    background-color: var(--light-grey);
    padding: 1.19rem 0 1.19rem 2rem;
`;
