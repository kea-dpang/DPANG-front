import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { GET_QnAList, GET_QnA } from "@api/directAsk";
import { customDate } from "assets/CustomName";

const ProductAskList = (value) => {
  const tableTitles = ["제목", "작성자", "작성일", "상태"];
  const colWidths = ["50%", "15%", "15%", "20%"];
  const [askLists, setAskLists] = useState([]);
  const [detail, setDetail] = useState([]);

  const [selectedRow, setSelectedRow] = useState(null);
  const handleRowClick = (index, id) => {
    console.log("문의내용 펼쳐져라: ", id);
    if (selectedRow === index) {
      setSelectedRow(null);
    } else {
      GET_QnA(id)
        .then((data) => {
          setDetail(data.data);
          setSelectedRow(index);
          console.log("답변 상세조회 ", data.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  useEffect(() => {
    GET_QnAList({
      category: "상품",
      itemId: value.value.id,
      pageNum: 0,
    })
      .then((data) => {
        setAskLists(data.data.content);
        console.log("askLists: ", data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <Table>
      <TableHeader>
        {tableTitles.map((title, index) => (
          <Col key={index} width={colWidths[index]} className="cm-SRegular18">
            {title}
          </Col>
        ))}
      </TableHeader>

      <Main>
        {askLists.map((item, index) => (
          <React.Fragment key={item.qnaId}>
            <Row onClick={() => handleRowClick(index, item.qnaId)}>
              <Item width={colWidths[0]} $state="not">
                {item.title}
              </Item>
              <Item className="col-DarkGrey" width={colWidths[1]} $state="not">
                {item.user.name}
              </Item>
              <Item className="col-DarkGrey" width={colWidths[2]} $state="not">
                {customDate(item.createdAt)}
              </Item>
              <Item width={colWidths[3]} $state={item.status}>
                {item.status}
              </Item>
            </Row>
            {selectedRow === index && (
              <FoldItem>
                <FoldItemContent>
                  <h1 className="cm-SBold16">Q.&nbsp; </h1>
                  <p className="cm-SRegular16">{detail.contents}</p>
                </FoldItemContent>
                {detail.answer && (
                  <FoldItemContent>
                    <h1 className="cm-SBold16 col-Orange">A.&nbsp; </h1>
                    <p className="cm-SRegular16">{detail.answer}</p>
                  </FoldItemContent>
                )}
              </FoldItem>
            )}
          </React.Fragment>
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
  padding-left: 3rem;
  box-sizing: border-box;
  background-color: var(--white);
  color: var(--black);
  border-top: 2px solid var(--black);
  border-bottom: 1px solid var(--black);
  height: 4rem;
  width: 100%;
  display: flex;
  text-align: start;
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
  padding-left: 3rem;
  border-top: 1px solid var(--semi-light-grey);
  background-color: white;
  width: 100%;
  height: 3.7535rem;
  display: flex;
  text-align: start;
  align-items: center;
  color: inherit;
`;
const Item = styled.div`
  width: ${(props) => props.width};
  color: ${(props) =>
    props.$state === "not"
      ? "var(--black)"
      : props.$state === "답변 완료"
      ? "var(--orange)"
      : "var(--semi-light-grey)"}; // askState에 따라 글자색 변경
`;
const FoldItem = styled.div`
  width: 100%;
  padding: 1rem 0rem 1rem 4rem;
  box-sizing: border-box;
  background: var(--light-grey, #f4f4f4);

  display: flex;
  flex-direction: column;
  gap: 0.3125rem;

  text-align: left; // 내용 왼쪽 정렬
`;
const FoldItemContent = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 1rem;
`;
