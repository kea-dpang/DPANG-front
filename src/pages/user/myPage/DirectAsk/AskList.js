import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { DirectAskData } from "assets/data/user/DirectAskData";
import { useRecoilValue } from "recoil";
import { periodAtom } from "../../../../recoil/user/PeriodSelectAtom";
import { GET_QnAList } from "@api/directAsk";

const tableTitles = ["문의날짜", "카테고리", "제목", "문의상태"];
const colWidths = ["15%", "15%", "50%", "20%"]; // 각 컬럼의 너비를 정의하는 배열

const AskList = () => {
  const [askDataList, setAskDataList] = useState([]);
  // period 날짜기간 값 가져오기
  const period = useRecoilValue(periodAtom);

  /* 서버로부터 원본 리스트 데이터 가져오기 */
  useEffect(() => {
    console.log(period.startDate, period.endDate);
    GET_QnAList() // 나중에 userId 값 넣어서 보내기
      .then((data) => {
        /* 원본 리스트 데이터를 날짜 필터링 하기 */
        let filteredData = data.data.content; //기간 설정 없을 때는 필터링 X
        if (period.startDate && period.endDate) {
          //기간 설정이 있을 때만 필터링 걸기
          filteredData = data.data.content.filter((item) => {
            const createdAt = new Date(item.createdAt);
            const startDate = new Date(period.startDate);
            const endDate = new Date(period.endDate);

            return startDate <= createdAt && createdAt <= endDate;
          });
        }
        setAskDataList(filteredData);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [period]);

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
