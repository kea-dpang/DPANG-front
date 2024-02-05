import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DirectAskData } from "assets/data/user/DirectAskData";
import { useRecoilValue } from "recoil";
import { periodAtom } from "../../../../recoil/user/PeriodSelectAtom";
import { GET_QnAList } from "@api/directAsk";
import UserPagination from "@components/UserPagination";

const tableTitles = ["문의날짜", "카테고리", "제목", "문의상태"];
const colWidths = ["15%", "15%", "50%", "20%"]; // 각 컬럼의 너비를 정의하는 배열

const AskList = () => {
  const [askDataList, setAskDataList] = useState([]);
  //페이지
  const [page, setPage] = useState(0);
  // period 날짜기간 값 가져오기
  const period = useRecoilValue(periodAtom);

  const userId = localStorage.getItem("userId");
  const [numOfElement, setNumOfElement] = useState(0);

  /* 서버로부터 원본 리스트 데이터 가져오기 */
  useEffect(() => {
    console.log(period.startDate, period.endDate);
    GET_QnAList({ userId: userId, period: period, pageNum: page })
      .then((data) => {
        setAskDataList(data.data.content);
        console.log("total::::", data.data.totalElements);
        setNumOfElement(data.data.totalElements);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [period, page]);

  /* 페이지네이션 */
  //하위 component에서 전달받은 새로운 val 값으로 업데이트 해준다
  const handleValChange = (page) => {
    setPage(page - 1);
  };

  return (
    <Table>
      <Header>
        {tableTitles.map((title, index) => (
          <Col key={index} width={colWidths[index]} className="cm-SRegular18">
            {title}
          </Col>
        ))}
      </Header>

      <Main>
        {askDataList.map((item, index) => (
          <Row key={index} to={`${item.qnaId}`}>
            <Item width={colWidths[0]}>{item.createdAt}</Item>
            <Item width={colWidths[1]}>{item.category}</Item>
            <Item width={colWidths[2]}>{item.title}</Item>
            <Item
              width={colWidths[3]}
              style={{
                color:
                  item.status === "답변 대기"
                    ? "var(--orange)"
                    : "var(--black)",
              }}
            >
              {item.status}
            </Item>
          </Row>
        ))}
      </Main>
      {/* pagination component에 리스트에서 원소의 개수, 전달해줄 value값, 그리고 값이 변경되었을때, state를 업데이트 시켜줄 함수를 props로 보낸다 */}
      <UserPagination
        numOfElement={numOfElement}
        handleValChange={handleValChange}
      />
    </Table>
  );
};

export default AskList;

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
