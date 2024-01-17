import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AskList = () => {
    const tableTitles = ['문의날짜', '카테고리', '제목', '문의상태'];
    const colWidths = ['15%', '15%', '50%', '20%']; // 각 컬럼의 너비를 정의하는 배열

    const [askLists, setAskLists] = useState([{
        data: '',
        category: '',
        title: '',
        askState: ''
    }]);

    // 더미 데이터 넣기
    useEffect(() => {
        setAskLists([
            {
                data: '2024-01-17',
                category: '배송 문의',
                title: '배송이 언제 도착하나요?',
                askState: '답변 대기'
            },
            {
                data: '2024-01-16',
                category: '환불 문의',
                title: '제가 1~2일 걸린다고 해서 시켰는데 일주일이 넘었네요...주문 제대로 들어간 건가요?',
                askState: '답변 완료'
            },
        ]);
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
                    <Row key={index}>
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
const Row = styled.div`
    border-bottom: 1px solid var(--black);
    width: 100%;
    height: 3.7535rem;
    display: flex;
    text-align: center;
    align-items: center;
`;

const Item = styled.div`
    width: ${(props) => props.width};

`;