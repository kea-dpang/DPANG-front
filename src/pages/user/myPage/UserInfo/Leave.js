import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useErrorAlert, useQuestionAlert } from "@components/SweetAlert";
import { useNavigate } from "react-router-dom";
import { removeCookie } from "@utils/cookie";
import { DELETE_UserLeave } from "@api/sign";

const leaveReasons = [
  "고객서비스 불만",
  "배송 불만",
  "환불정책 불만",
  "방문빈도 낮음",
  "상품가격 불만",
  "개인정보 유출 우려",
  "신뢰도 불만",
  "퇴사",
];

const Leave = () => {
  const [checkedState, setCheckedState] = useState(
    leaveReasons.reduce((initial, item) => ({ ...initial, [item]: false }), {}) // leaveReasons 배열의 각 항목을 키로, 그 값으로 false를 가지는 객체를 생성
  );
  const [password, setPassword] = useState();
  const [note, setNote] = useState("");
  const [isCheckboxChecked, setIsCheckboxChecked] = useState(false);

  const navigate = useNavigate();
  const showQuestionAlert = useQuestionAlert();
  const showErrorAlert = useErrorAlert();

  const handleCheckboxChange = (e) => {
    const isChecked = e.target.checked;
    // 체크박스가 클릭될 때마다 호출되는 handleCheckboxChange 함수. 이 함수는 체크박스의 onChange 이벤트 핸들러로 사용.
    setCheckedState({ ...checkedState, [e.target.name]: isChecked }); // 클릭된 체크박스의 name 속성과 checked 상태를 사용하여 checkedState를 업데이트

    /* 버튼 활성화 or 비활성화 로직 */
    // 체크박스가 클릭되었을 때, 하나라도 체크되었는지 확인
    const newState = { ...checkedState, [e.target.name]: isChecked };
    setIsCheckboxChecked(Object.values(newState).some((value) => value)); // newState의 모든 값 중 하나라도 true이면 setIsCheckboxChecked에 true를 전달하고, 그렇지 않다면 false를 전달
  };
  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleNoteChange = (e) => {
    setNote(e.target.value);
  };

  const handleSubmit = () => {
    showQuestionAlert({
      title: "정말 탈퇴하시겠습니까?",
      text: "확인 클릭 시 탈퇴됩니다.",
      saveText: "회원탈퇴에 성공하였습니다.",
      // navi: "/login",
      onConfirm: () =>
        DELETE_UserLeave(password, checkedState, note)
          .then((data) => {
            /* 회원 정보 모두 삭제 */
            localStorage.clear();
            removeCookie("accessToken");
            removeCookie("refreshToken");
            navigate("/login");
          })
          .catch((error) => {
            if (error.response.status === 400) {
              showErrorAlert({
                title: "비밀번호가 틀립니다.",
                text: "다시 시도해 주세요.",
              });
            }
            // showErrorAlert({
            //   title: "회원탈퇴에 실패하셨습니다.",
            //   text: "잠시 후 다시 시도해 주세요.",
            // });
            console.log(error);
          }),
    });
  };

  return (
    <Wrap>
      <Title>
        <h1 className="cm-LBold30">회원 탈퇴</h1>
      </Title>
      <Main>
        <SubTitle>
          <h2 className="cm-SRegular18">1. 회원 탈퇴 안내</h2>
        </SubTitle>
        <Guide>
          <p>
            DPang 탈퇴안내 <br />
            <br />
            회원님께서 회원 탈퇴를 원하신다니 저희 쇼핑몰의 서비스가 많이
            부족하고 미흡했나 봅니다.
            <br />
            불편하셨던 점이나 불만사항을 알려주시면 적극 반영해서 고객님의
            불편함을 해결해 드리도록 노력하겠습니다
            <br />
            <br />
            ■ 아울러 회원 탈퇴시의 아래 사항을 숙지하시기 바랍니다.
            <br />
            1. 탈퇴 시 회원님께서 보유하셨던 마일리지는 삭제 됩니다.
            <br />
            2. 회원 탈퇴 시 회원님의 정보는 상품 반품 및 A/S를 위해 전자상거래
            등에서의 소비자 보호에 관한 법률에 의거한 고객정보 보호정책에따라
            관리 됩니다.
          </p>
        </Guide>

        <SubTitle>
          <h2 className="cm-SRegular18">2. 회원 탈퇴 하기</h2>
        </SubTitle>
        <Table>
          <Row>
            <p>비밀번호</p>
            <Content>
              <Box
                sx={{
                  "& > :not(style)": { m: 0, width: "33.3125rem" },
                  display: "flex",
                  flexDirection: "column",
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="password"
                  onChange={handlePasswordChange}
                  variant="outlined"
                  InputLabelProps={{ shrink: true }}
                />
              </Box>
            </Content>
          </Row>
          <Row>
            <p>탈퇴 사유</p>
            <Content>
              <GridContainer>
                {leaveReasons.map((reason, index) => (
                  <div key={index}>
                    <Checkbox
                      id={`checkbox-${index}`}
                      name={reason}
                      checked={checkedState[reason]} // 체크박스의 상태를 결정
                      onChange={handleCheckboxChange} // 체크박스가 클릭될 때 호출되는 함수를 지정
                      size="small"
                    />
                    <label htmlFor={`checkbox-${index}`}>{reason}</label>
                  </div>
                ))}
              </GridContainer>
            </Content>
          </Row>
          <Row>
            <p>남기실 말씀</p>
            <Content>
              <Box
                sx={{
                  "& .MuiTextField-root": { m: 0, width: "100%" },
                }}
                noValidate
                autoComplete="off"
              >
                <TextField
                  id="outlined-multiline-static"
                  onChange={handleNoteChange}
                  // label="note"
                  multiline
                  rows={4}
                  // defaultValue="남기실 말씀"
                />
              </Box>
            </Content>
          </Row>
        </Table>
      </Main>
      <Submit>
        <SubmitBtn
          type="submit"
          className="Btn_M_Navy"
          onClick={handleSubmit}
          disabled={password === undefined || !isCheckboxChecked}
        >
          회원 탈퇴
        </SubmitBtn>
      </Submit>
    </Wrap>
  );
};

export default Leave;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.div`
  display: flex;
  height: 8rem;
  align-items: center;

  border-bottom: 1px solid var(--black);
`;
const SubTitle = styled.div`
  margin-top: 3rem;
  padding-bottom: 1rem;
`;
const Main = styled.div`
  /* display: flex; */
`;
const Guide = styled.div`
  border: 1px solid black;
  padding: 3rem;
  p {
    line-height: 1.5rem;
  }
`;

const Table = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
  border-top: 1px solid var(--black);
  &:last-child {
    border-bottom: 1px solid var(--black);
  }
  display: flex;
  p {
    background: var(--light-grey, #f4f4f4);
    /* padding: 2rem; */
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Content = styled.div`
  width: 100%;
  margin: 1rem;
`;
const GridContainer = styled.div`
  display: grid;
  width: 70%;
  padding: 2rem;
  /* width: 50rem; */
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem; // 체크박스 사이의 간격을 설정
`;
const Submit = styled.div`
  padding-top: 4rem;
  display: flex;
  justify-content: flex-end;
`;
const SubmitBtn = styled.button`
  background-color: ${({ disabled }) =>
    disabled ? "var(--semi-light-grey)" : "var(--navy)"};
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
`;
