import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { ProductAskData } from '../../../assets/datas/ProductAskData';

const ProductAskList = () => {
    const tableTitles = ['제목', '작성자', '작성일', '상태'];
    const colWidths = ['50%', '15%', '15%', '20%'];

    const [askLists, setAskLists] = useState([]);

    // 더미 데이터 넣기
    useEffect(() => {
        setAskLists(ProductAskData);
    }, []);

    return (
        <Table>
            <TableHeader>
                {tableTitles.map((title, index) => (
                   <Col key={index} width={colWidths[index]} className='cm-SRegular18'>{title}</Col>
                ))}
            </TableHeader>

            <Main>
                {askLists.map((item, index) =>(
                    <Row key={index} to={`${item.askId}`}>
                        <Item width={colWidths[0]}>{item.title}</Item>
                        <Item width={colWidths[1]}>{item.userName}</Item>
                        <Item width={colWidths[2]}>{item.date}</Item>
                        <Item width={colWidths[3]}>{item.askState}</Item>
                    </Row>
                    
                ))}
            </Main>
        </Table>
    );
};

export default ProductAskList;

const Table = styled.div`
    padding: 0rem 8rem 4rem 8rem;
`;
const TableHeader = styled.div`
    background-color: var(--white);
    color: var(--black);
    border-top: 2px solid var(--black);
    border-bottom: 1px solid var(--black); 
    height: 4rem;
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
    border-bottom: 1px solid var(--semi-light-grey);
    width: 100%;
    height: 3.7535rem;
    display: flex;
    text-align: center;
    align-items: center;
    color: inherit;
`;

const Item = styled.div`
    width: ${(props) => props.width};
`;