import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import { GET_admin_mileage_list } from "@api/mileage";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";

function Index() {
  const [mileageList, setMileageList] = useState([]);
  const [loading, setLoading] = useState(true);

  //서버로 보낼 parameter값
  const [val, setVal] = useState({
    userId: undefined,
    status: "",
    startDate: "",
    endDate: "",
    depositorName: "",
    sortOption: "",
    page: 0,
    size: 100,
    XID: 1,
  });

  //데이터를 가져오는 함수
  const fetchData = async () => {
    //성공하면
    try {
      const data = await GET_admin_mileage_list(val);

      // 데이터가 비어 있는 경우 다시 호출
      if (data.data.content.length === 0) {
        fetchData();
      }
      //데이터가 비어있지 않은 경우에는 그냥 값 그대로 넣어준다
      else {
        setMileageList(data.data.content);
        setLoading(false);
      }
      //실패하면
    } catch (error) {
      console.error("Error fetching mileage data: ", error);
    }
  };

  //컴포넌트가 호출되는 경우에 바로 실행
  useEffect(() => {
    // 컴포넌트 마운트 시 데이터 로딩 시작
    fetchData();
  }, [val]);

  if (loading) {
    return (
      <PageName className="cm-MBold24">
        <p>로딩중.......</p>
        <br />
        <CircularProgress />
      </PageName>
    );
  }

  return <TableRow mileageList={mileageList} />;
}

const PageName = styled.div`
  display: flex;
  flex-direction: column;
  width: 88.9375rem;
  height: 50rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 2.125rem 0rem 0.9375rem 7.5rem;
  align-items: center;
  justify-content: center;
`;

export default Index;
