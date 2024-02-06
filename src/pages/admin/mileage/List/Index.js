import { useState, useEffect } from "react";
import TableRow from "./TableRow";
import { GET_admin_mileage_list } from "@api/mileage";
import styled from "styled-components";
import CircularProgress from "@mui/material/CircularProgress";
import { useLocation, useNavigate } from "react-router-dom";
import { CustomMileageStatusNameReverse } from "assets/CustomName";

function Index() {
  const [mileageList, setMileageList] = useState([]);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const page = searchParams.get("page") || 0;
  const [totalItems, setTotalItems] = useState(0);
  const navi = useNavigate();

  const handlePagination = (page) => {
    console.log("지금 페이지네이션 페이지 : ", page);
    navi(`?page=${page}`);
  };
  const handleCategoryChange = (val) => {
    setVal((prevState) => ({
      ...prevState,
      status: CustomMileageStatusNameReverse(val),
    }));
  };
  const handleSearch = (val) => {
    setVal((prev) => ({
      ...prev,
      depositorName: val,
    }));
  };

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
        console.log(data);
        setMileageList(data.data.content);
        setTotalItems(data.data.totalElements);
        setLoading(false);
      }
      //실패하면
    } catch (error) {
      console.error("Error fetching mileage data: ", error);
    }
  };

  //컴포넌트가 호출되는 경우에 바로 실행
  useEffect(() => {
    GET_admin_mileage_list(val)
      .then((data) => {
        console.log(data);
        setMileageList(data.data.content);
        setTotalItems(data.data.totalElements);
      })
      .catch((error) => {
        console.error("Error fetching mileage data: ", error);
      });
  }, [val]);

  useEffect(() => {
    setVal((prevState) => ({
      ...prevState,
      page: page,
    }));
  }, [page]);

  console.log("ddddd", mileageList);
  return (
    <TableRow
      mileageList={mileageList}
      handlePagination={handlePagination}
      totalItems={totalItems}
      onChangePage ={handleCategoryChange}
      handleSearch={handleSearch}
    />
  );
}

export default Index;
