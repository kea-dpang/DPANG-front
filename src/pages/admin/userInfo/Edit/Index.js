import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import { userListData } from "../../../../assets/data/admin/AdminUserData";
import { DELETE_Users, GET_UserDetail } from "@api/user";

const title = ["No.", "사원번호", "이름", "이메일", "입사일", "주소"];

const EditPage = () => {
  let params = useParams().memberId;
  const [userData, setUserData] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    GET_UserDetail(params)
      .then((data) => {
        console.log("성공?ㅣ", data.data);
        setUserData(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = () => {
    DELETE_Users(params)
      .then((data) => {
        alert("해당 회원이 삭제되었습니다.");
        navigate("/admin/user");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrap>
      <Head>
        <h1 className="cm-SBold18">회원 상세정보</h1>
      </Head>
      <Main>
        {userData && (
          <>
            <Item>
              <h2 style={{ width: "4rem" }}>No.</h2>
              <p>{userData.userId}</p>
            </Item>
            <Item>
              <h2 style={{ width: "4rem" }}>사원번호</h2>
              <p>{userData.employeeNumber}</p>
            </Item>
            <Item>
              <h2 style={{ width: "4rem" }}>이름</h2>
              <p>{userData.name}</p>
            </Item>
            <Item>
              <h2 style={{ width: "4rem" }}>이메일</h2>
              <p>{userData.email}</p>
            </Item>
            <Item>
              <h2 style={{ width: "4rem" }}>입사일</h2>
              <p>{userData.joinDate}</p>
            </Item>
            <Item>
              <h2 style={{ width: "4rem" }}>주소</h2>
              <p>{userData.defaultAddress}</p>
            </Item>
          </>
        )}
      </Main>
      <button className="Btn_S_White" onClick={handleDelete}>
        삭제
      </button>
    </Wrap>
  );
};

export default EditPage;

const Wrap = styled.div`
  margin: 2rem 2rem;
  /* background-color: red; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
const Head = styled.div`
  border-bottom: 1px solid black;
  padding-bottom: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Main = styled.div`
  /* padding-top: 2.62rem; */

  display: flex;
  flex-direction: column;
  gap: 1.06rem;
`;
const Item = styled.div`
  display: flex;
  gap: 10.88rem;
  background-color: var(--light-grey);
  padding: 1.19rem 0 1.19rem 2rem;
`;
