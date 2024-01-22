import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Category from './Category';
import AskTitle from './AskTitle';
import AskContent from './AskContent';
import { useLocation, useParams } from 'react-router-dom';
import { DirectAskList } from '../../../../../assets/datas/DirectAskData';

const AskEnrollPage = () => {
    let params = useParams().askId;
    const location = useLocation();
    
    const [detail, setDetail] = useState();
    const [isEnrollPage, setIsEnrollPage] = useState(false); // 'directask/enroll' 페이지인지 여부를 저장하는 상태

    useEffect(() => {
        console.log(detail)
        
        const matchedData = DirectAskList.find(item => item.askId === params); // DirectAskList에서 askId가 일치하는 데이터 찾기
        if (matchedData) {
            setDetail(matchedData); // 찾은 데이터를 detail 상태에 설정
        }

        // 클린업 함수
        return () => {
            setDetail(undefined);
        };
    }, [params]); 

    useEffect(() => {
        setIsEnrollPage(location.pathname === '/user/mypage/temp/directask/enroll'); // 현재 위치가 'directask/enroll'인지 확인
    }, [location]); 

    return (
        <Wrap>
            <Title>
                <h1 className='cm-LBold30'>1:1 문의</h1>
            </Title>
            <Item>
                <p>유형</p>
                <Category detail={detail} pageCheck={isEnrollPage}/>
            </Item>

            <Item>
                <p>제목</p>
                <AskTitle detail={detail} pageCheck={isEnrollPage}/>
            </Item>

            <Item>
                <p>내용</p>
                <AskContent detail={detail} pageCheck={isEnrollPage}/>
            </Item>

            {/* 답변 */}
            {detail && detail.askState==="답변 완료" &&  
                <Item> 
                    <p>답변</p>
                    <textarea 
                        cols="50" 
                        rows="10"
                        className='cm-SRegular16'
                        disabled={true} 
                        value={detail.answer}
                    ></textarea>
                </Item>
            }
            {/* 버튼 */}
            {isEnrollPage ? (
                <Submit>
                    <button type='submit' className='Btn_M_Navy'>문의접수</button>
                </Submit>
                ) : ( 
                    detail && detail.askState==="답변 대기" &&  
                        <Submit>
                            <button type='submit' className='Btn_M_Navy'>수정 완료</button>
                        </Submit> 
                )
            }

        </Wrap>
    );
};

export default AskEnrollPage;

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

const Item = styled.div`
    border: 1px solid black;
    display: flex;
    align-items: center;
    gap: 6.44rem;
    
    position: relative;
    & textarea {
        width: 61rem;
        min-height: 3rem;

        border-radius: 0.3125rem;
        border: 1px solid var(--dark-grey, #BCBCBC);
        background: var(--white, #FFF);
        margin: 8px; // margin을 주고 싶은 경우
        padding: 1rem; // padding을 주고 싶은 경우
        box-sizing: border-box;

        &:focus {
            border-color: var(--dark-grey, #BCBCBC); // 클릭했을 때 테두리 색상
            outline: none; // 대부분의 브라우저에서 텍스트 필드에 자동으로 적용되는 아웃라인을 제거
    
        }
    }
`;

const Submit = styled.div`
    padding-top: 3rem;
    display: flex;
    justify-content: flex-end;
`;


