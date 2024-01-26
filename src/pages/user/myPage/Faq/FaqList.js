import React, { useEffect, useState } from "react";
import FaqFoldItem from "pages/user/myPage/FAQ/FAQFoldItem";
import {
  FaqDataList,
  FaqTableTitle,
} from "../../../../assets/data/user/FAQData";
import styled from "styled-components";

const colWidths = ["20%", "20%", "20%", "20%", "20%", "20%"]; // 각 컬럼의 너비를 정의하는 배열

const FaqList = () => {
  const [FoldCheck, setFoldCheck] = useState(
    Array(FaqDataList.length).fill(false)
  );
  const [selectedId, setSelectedId] = useState(1); // 선택된 id를 관리하는 상태

  // 선택된 id에 따라 FaqDataList 필터링
  const filteredFaqDataList = FaqDataList.filter(
    (faqData) => faqData.subjectId === selectedId
  );

  const handleItemClick = (index) => {
    const newFoldCheck = [...FoldCheck];
    newFoldCheck[index] = !newFoldCheck[index];
    setFoldCheck(newFoldCheck);
  };
  useEffect(() => {
    console.log(FoldCheck);
  }, [FoldCheck]);
  return (
    // <Wrap>
    <Table>
      <Header>
        {FaqTableTitle.map((item, index) => (
          <Col
            key={index}
            width={colWidths[index]}
            className="cm-SRegular18"
            onClick={() => setSelectedId(item.id)}
          >
            {item.subject}
          </Col>
        ))}
      </Header>

      <Main>
        {filteredFaqDataList.map((item, index) => (
          <>
            <Row key={index} onClick={() => handleItemClick(index)}>
              {" "}
              {/*세로 정렬 */}
              <Item>
                <h1 className="cm-SBold18">Q. </h1>
                <p className="cm-SRegular18">{item.title}</p>
              </Item>
            </Row>
            {FoldCheck[index] && (
              <Row>
                <FoldItem>
                  <h1 className="cm-SBold18">A. </h1>
                  <p className="cm-SRegular18">{item.content}</p>
                </FoldItem>
              </Row>
            )}
          </>
        ))}
      </Main>
    </Table>
    // </Wrap>
  );
};

export default FaqList;

const Wrap = styled.div``;
const Table = styled.div``;
const Header = styled.div`
  background-color: var(--navy);
  color: var(--white);
  height: 3.1875rem;
  width: 100%;

  display: flex;
  text-align: center;
  align-items: center;
`;
const Col = styled.button`
  width: ${(props) => props.width};
  background: none;
`;
const Main = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  border-bottom: 1px solid var(--black);
  width: 100%;
  /* height: 5.56rem; */

  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  color: inherit; /* 상속 받은 색상 사용 */

  h1 {
    color: var(--orange);
  }
`;
const Item = styled.button`
  width: 100%;
  padding: 2rem 1.4375rem;
  /* height: 100%; */
  background-color: var(--white);

  display: flex;
  align-content: center;
  align-items: center;

  gap: 0.3125rem;
`;
const FoldItem = styled.div`
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
  background: var(--light-grey, #f4f4f4);

  display: flex;
  gap: 0.3125rem;

  text-align: left; // 내용 왼쪽 정렬
`;
