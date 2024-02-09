import React, { useEffect, useState } from "react";
import {
  FaqDataList,
  FaqTableTitle,
} from "../../../../assets/data/user/FAQData";
import styled from "styled-components";
import { GET_FAQList } from "@api/faq";

const colWidths = ["20%", "20%", "20%", "20%", "20%", "20%"]; // 각 컬럼의 너비를 정의하는 배열

const FaqList = () => {
  const [faqDataList, setFaqDataList] = useState();
  const [FoldCheck, setFoldCheck] = useState();
  // Array(faqDataList.length).fill(false)
  const [selectedId, setSelectedId] = useState(1); // 선택된 id를 관리하는 상태

  const handleItemClick = (index) => {
    const newFoldCheck = [...FoldCheck];
    newFoldCheck[index] = !newFoldCheck[index];
    setFoldCheck(newFoldCheck);
  };

  useEffect(() => {
    const selectedSubject = FaqTableTitle.find(
      (item) => item.id === selectedId
    )?.subject;

    GET_FAQList(selectedSubject)
      .then((data) => {
        console.log("하이루~ ", data.data.content);
        setFaqDataList(data.data.content);
        setFoldCheck(Array(data.data.content.length).fill(false));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [selectedId]);

  return (
    <Table>
      <Header>
        {FaqTableTitle.map((item, index) => (
          <Col
            key={index}
            width={colWidths[index]}
            className="cm-SRegular18"
            onClick={() => setSelectedId(item.id)}
            selected={selectedId === item.id} // 선택된 header의 스타일
          >
            <p>{item.subject}</p>
            <LineWrap>
              <Line selected={selectedId === item.id} />
            </LineWrap>
          </Col>
        ))}
      </Header>

      <Main>
        {faqDataList &&
          FoldCheck &&
          faqDataList.map((item, index) => (
            <React.Fragment key={index}>
              <Row key={index} onClick={() => handleItemClick(index)}>
                <Item>
                  <h1 className="cm-SBold18">Q. </h1>
                  <p className="cm-SRegular18">{item.question}</p>
                </Item>
              </Row>
              {FoldCheck[index] && (
                <Row>
                  <FoldItem>
                    <h1 className="cm-SBold18">A. </h1>
                    <Content className="cm-SRegular18">{item.answer}</Content>
                  </FoldItem>
                </Row>
              )}
            </React.Fragment>
          ))}
      </Main>
    </Table>
  );
};

export default FaqList;

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
  font-weight: ${(props) => (props.selected ? "700" : "")};
  /* text-decoration: ${(props) => (props.selected ? "underline" : "none")}; */
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
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
  /* padding: 1rem; */
  padding: 2rem 1.4375rem;

  box-sizing: border-box;
  background: var(--light-grey, #f4f4f4);

  display: flex;
  gap: 0.3125rem;

  text-align: left; // 내용 왼쪽 정렬
`;

const Content = styled.div`
  /* width: 100%; */
  width: calc(100% - 2.875rem);

  /* white-space: normal; */
  overflow-wrap: break-word;
`;

const LineWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-content: center;
`;
const Line = styled.div`
  width: 9rem;
  /* height: 1rem; */
  /* border: 2px solid var(--white); */
  border: ${(props) => props.selected && "2px solid var(--white)"};
`;
