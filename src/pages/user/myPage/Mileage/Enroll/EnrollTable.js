import styled from "styled-components";
import { GlobalStyle } from "styles/GlobalStyled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { POST_mileage_request } from "@api/mileage";
import { useQuestionAlert } from "@components/SweetAlert";

function EnrollTable(props) {
  //alert창을 커스텀해서 보내준다


  const showQuestionAlert = useQuestionAlert();

  const handleApprove = (val) => {
    // 확인 창을 띄움
    showQuestionAlert({
      title: "신청하시겠습니까?",
      text: "확인 클릭 시 신청 됩니다.",
      saveText: "신청되었습니다.",
      navi: "/user/mypage/mileage", 
      onConfirm: () => handleConfirm(),
    });
  };

  const handleConfirm = () => {

    const userId = localStorage.getItem("userId");
    if (money === null)
      setMoney(0);

    const XID = 1;

    const data = {
      XID: XID,
      userId: userId,
      amount: money,
      depositor: name,
    };

    return POST_mileage_request(data)
      .then((data) => {
        console.log("등록", data.data);
      })
      .catch((error) => {
        console.log(error);
      });

  };


  const [money, setMoney] = useState();
  const user = props.userData;
  const [name, setName] = useState(user.name);
  const navi = useNavigate();


  return (
    <Container>
      <Table className="cm-SBold16">
        <Border />
        <Box height="6rem">
          <ColBox height="6rem">이메일</ColBox>
          <InputBox width="26rem" className="cm-SRegular16">
            {user.email}
          </InputBox>

          <ColBox height="6rem">이름</ColBox>

          <InputBox width="26rem" className="cm-SRegular16">
            {user.name}
          </InputBox>
        </Box>

        <Border />
        <Box height="6rem">
          <ColBox height="6rem">충전 희망 마일리지</ColBox>
          <InputBox width="62rem" className="cm-SRegular16">
            <TextArea
              className="cm-SRegular16"
              onChange={(e) => {
                setMoney(e.target.value);
              }}
            />
            <Text colour="var(--dark-grey)">마일</Text>
          </InputBox>
        </Box>
        <Border />

        <Box height="7rem">
          <ColBox height="7rem">입금자명</ColBox>
          <InputBox width="62rem" className="cm-SRegular16">
            <TextBox>
              <TextArea
                className="cm-SRegular16"
                placeholder={user.name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
              />
              <Text colour="red">
                ※ 입금자명이 정확해야 충전이 완료될 수 있습니다!입금자명을
                정확하게 입력해주세요
              </Text>
            </TextBox>
          </InputBox>
        </Box>
        <Border />

        <Box height="6rem">
          <ColBox height="6rem">입금금액</ColBox>
          <InputBox width="62rem" className="cm-SRegular16">
            {parseInt(money, 10).toLocaleString()} 원
          </InputBox>
        </Box>
        <Border />

        <GlobalStyle />
        <Box height="6rem">
          <ColBox height="6rem">입금계좌</ColBox>
          <InputBox width="62rem" className="cm-SRegular16">
            카카오뱅크 3333-23-1239024
          </InputBox>
        </Box>
        <Border />
      </Table>

      <P>
        ※ 입금 확인에는 시간이 소요될 수 있습니다. 2 영업일 이내로 충전이
        완료되지 않으면 문의주세요
      </P>
      <ButtonBox>
        <Button
          className="cm-SBold16"
          onClick={handleApprove}
          disabled={!name || money === null || isNaN(money)}
        >
          충전 하기
        </Button>
      </ButtonBox>
    </Container>
  );
}

const Container = styled.div`
  width: 72rem;
  height: 50rem;
`;

const Table = styled.div`
  width: 72rem;
  margin-top: 2rem;
  z-index: 5;
`;
const Border = styled.div`
  width: 72rem;
  border-bottom: 1px black solid;
`;
const Box = styled.div`
  height: ${(props) => props.height};
  width: 72rem;
  display: flex;
`;

const ColBox = styled.div`
  heigth: ${(props) => props.height};
  width: 10rem;
  background-color: var(--light-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
const InputBox = styled.div`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  display: flex;
  align-items: center;
  padding-left: 2rem;
  box-sizing: border-box;
`;

const TextArea = styled.input`
  width: 18rem;
  height: 1.2rem;
  resize: none;
  outline: none;
  padding: 10px;
`;
const Text = styled.p`
  color: ${(props) => props.colour};
`;
const TextBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const Button = styled.button`
  width: 11rem;
  height: 3rem;
  background-color: var(--navy);
  color: white;
  border-radius: 3px;
  ${({ disabled }) => (
    disabled ?
      `background-color: var(--light-grey); color: var(--dark-grey)`
      : `background-color: var(--navy); color: white;`)}
`;

const ButtonBox = styled.div`
  width: 72rem;
  display: flex;
  height: 10rem;
  justify-content: end;
  align-items: end;
`;

const P = styled.div`
  color: var(--orange);
`;

export default EnrollTable;
