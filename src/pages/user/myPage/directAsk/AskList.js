import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { DirectAskList } from '../../../../assets/datas/DirectAskData';

const AskList = () => {
    const tableTitles = ['문의날짜', '카테고리', '제목', '문의상태'];
    const colWidths = ['15%', '15%', '50%', '20%']; // 각 컬럼의 너비를 정의하는 배열

    const [askLists, setAskLists] = useState([]);

    // 더미 데이터 넣기
    useEffect(() => {
        setAskLists(DirectAskList); // DirectAskList의 데이터를 askLists 상태에 넣습니다.
    }, []);

    return (
        <Table>
            <Header>
                {tableTitles.map((title, index) => (
                   <Col key={index} width={colWidths[index]} className='cm-SRegular18'>{title}</Col>
                ))}
            </Header>

            <Main>
                {askLists.map((item, index) =>(
                    <Row key={index} to={`${item.askId}`}>
                        <Item width={colWidths[0]}>{item.data}</Item>
                        <Item width={colWidths[1]}>{item.category}</Item>
                        <Item width={colWidths[2]}>{item.title}</Item>
                        <Item width={colWidths[3]}>{item.askState}</Item>
                    </Row>
                    
                ))}
            </Main>
        </Table>
    );
};

export default AskList;

const Table = styled.div`

`;
const Header = styled.div`
    background-color: var(--navy);
    color: var(--white);
    height: 3.1875rem;
    width: 100%;

    display: flex;
    text-align: center;
    align-items: center;
`;
const Col = styled.div`
    width: ${(props) => props.width};
`;
const Main = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;
const Row = styled(Link)`
    border-bottom: 1px solid var(--black);
    width: 100%;
    height: 3.7535rem;
    display: flex;
    text-align: center;
    align-items: center;

    color: inherit; /* 상속 받은 색상 사용 */
`;

const Item = styled.div`
    width: ${(props) => props.width};

`;