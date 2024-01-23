import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { ProductAskData } from '../../../assets/datas/ProductAskData';

const ProductAskList = () => {
    const tableTitles = ['제목', '작성자', '작성일', '상태'];
    const colWidths = ['50%', '15%', '15%', '20%'];

    const [askLists, setAskLists] = useState([]);
    
    const [selectedRow, setSelectedRow] = useState(null);
    const handleRowClick = (index) => {
        if (selectedRow === index) {
          setSelectedRow(null);
        } else {
          setSelectedRow(index);
        }
      };

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
                    <>
                        <Row key={index} onClick={() => handleRowClick(index)}>
                            <Item width={colWidths[0]} state='not'>{item.title}</Item>
                            <Item width={colWidths[1]} state='not'>{item.userName}</Item>
                            <Item width={colWidths[2]} state='not'>{item.date}</Item>
                            <Item width={colWidths[3]} state={item.askState}>{item.askState}</Item>
                        </Row>
                        {selectedRow === index && 
                            <FoldItem>
                                <FoldItemContent>
                                    <h1 className='cm-SBold18'>Q.&nbsp;  </h1>
                                    <p className='cm-SRegular18'>{item.content}</p>
                                </FoldItemContent>
                                {item.answer && 
                                    <FoldItemContent>
                                        <h1 className='cm-SBold18 col-Orange'>A.&nbsp; </h1>
                                        <p className='cm-SRegular18'>{item.answer}</p>
                                    </FoldItemContent>
                                }
                            </FoldItem>
                        }
                    </>
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
const Row = styled.button`
    border-top: 1px solid var(--semi-light-grey);
    background-color: white;
    width: 100%;
    height: 3.7535rem;
    display: flex;
    text-align: center;
    align-items: center;
    color: inherit;
`;
const Item = styled.div`
    width: ${(props) => props.width};
    color: ${(props) => (props.state === 'not' ? 'var(--black)' : props.state === '답변 완료' ? 'var(--orange)' : 'var(--semi-light-grey)')};  // askState에 따라 글자색 변경
`;
const FoldItem = styled.div`
    width: 100%;
    padding: 1rem 0rem 1rem 4rem;
    box-sizing: border-box;
    background: var(--light-grey, #F4F4F4);

    display: flex;
    flex-direction: column;
    gap: 0.3125rem; 

    text-align: left; // 내용 왼쪽 정렬
`
const FoldItemContent = styled.div`
    display: flex;
    flex-direction: row;
    padding-bottom: 1rem;
`