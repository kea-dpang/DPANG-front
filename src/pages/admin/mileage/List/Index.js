import { useState, useEffect } from 'react';
import TableRow from './TableRow';
import { GET_admin_mileage_list } from "@api/mileage";

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
    size: 10,
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
    return <p>로딩중</p>;
  }

  return <TableRow mileageList={mileageList} />;
}

export default Index;
