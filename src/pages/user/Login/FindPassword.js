import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { POST_Code, POST_newPassword } from "@api/sign";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

const FindPasswordPage = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
    watch,
  } = methods;

  const emailValue = watch("email");
  const navigate = useNavigate();

  /*  특정 필드의 유효성 검사를 수동으로 실행 */
  const handleCodeBtn = async (e) => {
    // 이메일 필드의 유효성 검사 실행
    const isValid = await methods.trigger("email");

    if (isValid) {
      POST_Code(emailValue)
        .then((data) => {
          alert(
            "해당 이메일로 인증번호가 전송되었습니다. 메일을 확인해주세요."
          );
        })
        .catch((error) => {
          if (error.response.status === 404) {
            alert("인증코드가 틀립니다. 다시 시도해주세요.");
          } else {
            alert("비밀번호 재설정에 실패하였습니다. 다시 시도해 주세요.");
          }
          console.log(error);
        });
    }
  };

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    // console.log(data);
    POST_newPassword(data)
      .then((data) => {
        alert("비밀번호가 재설정되었습니다. 로그인 페이지로 이동합니다.");
        navigate("/login");
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrap>
      <BoxContainer as="form" onSubmit={handleSubmit(onSubmit)}>
        <h1 className="cm-XLBold36">비밀번호 찾기</h1>
        <Box
          sx={{
            "& > :not(style)": { m: 1 },
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
            alignItems: "center",
          }}
          noValidate
          autoComplete="off"
        >
          <Main>
            <ItemWrap>
              <p>이메일</p>
              <Item>
                <TextField
                  id="email"
                  variant="outlined"
                  name="email"
                  style={{ width: "33rem" }}
                  error={!!errors.email}
                  helperText={errors.email && errors.email.message}
                  {...register("email", {
                    required: "이메일은 필수 입력입니다.",
                    pattern: {
                      value: /\S+@\S+\.\S+/,
                      message: "이메일 형식에 맞지 않습니다.",
                    },
                  })}
                />
                <StyledButton
                  type="button"
                  className="Btn_M_White"
                  width={"9rem"}
                  onClick={handleCodeBtn}
                >
                  인증번호 전송
                </StyledButton>
              </Item>
            </ItemWrap>

            <ItemWrap>
              <p>인증번호</p>
              <Item>
                <TextField
                  id="code"
                  variant="outlined"
                  name="code"
                  style={{ width: "33rem" }}
                  error={!!errors.code}
                  helperText={errors.code && errors.code.message}
                  {...register("code", {
                    required: "인증번호는 필수 입력입니다.",
                  })}
                />
                {/* <StyledButton
                  type="button"
                  className="Btn_M_White"
                  width={"9rem"}
                >
                  확인
                </StyledButton> */}
              </Item>
            </ItemWrap>
            <ItemWrap>
              <p>신규 비밀번호</p>
              <Item>
                <TextField
                  id="newPassword"
                  variant="outlined"
                  name="newPassword"
                  style={{ width: "33rem" }}
                  type="password"
                  error={!!errors.newPassword}
                  helperText={errors.newPassword && errors.newPassword.message}
                  {...register("newPassword", {
                    required: "비밀번호는 필수 입력입니다.",
                    pattern: {
                      value:
                        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
                      message:
                        "비밀번호는 8~15자 이내이며, 최소 하나의 대문자, 소문자, 숫자, 특수 문자가 포함되어야 합니다.",
                    },
                  })}
                />
              </Item>
            </ItemWrap>
            <ItemWrap>
              <p>신규 비밀번호 확인</p>
              <Item>
                <TextField
                  id="newPasswordCheck"
                  variant="outlined"
                  name="newPasswordCheck"
                  style={{ width: "33rem" }}
                  type="password"
                  error={!!errors.newPasswordCheck}
                  helperText={
                    errors.newPasswordCheck && errors.newPasswordCheck.message
                  }
                  {...register("newPasswordCheck", {
                    required: "비밀번호 확인은 필수 입력입니다.",
                    validate: (value) =>
                      value === getValues("newPassword") ||
                      "비밀번호가 일치하지 않습니다.",
                  })}
                />
              </Item>
            </ItemWrap>
          </Main>
        </Box>

        <Submit>
          <StyledButton type="submit" className="Btn_M_Navy" width={"20rem"}>
            비밀번호 변경
          </StyledButton>
        </Submit>
      </BoxContainer>
    </Wrap>
  );
};

export default FindPasswordPage;

const Wrap = styled.div`
  width: 100vw;
  /* height: 100vh; */
  min-height: 60rem;
  max-width: 100%;
  box-sizing: border-box;
  /* min-width: ; */

  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const BoxContainer = styled.form`
  width: 76.4375rem;
  /* height: 108.9375rem; */
  padding: 3rem;
  box-sizing: border-box;

  background: var(--white);
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
  gap: 4.44rem;

  text-align: center;

  /* 자식에게 border 주기 */
  & > *:not(:last-child) {
    padding-bottom: 3rem;
    border-bottom: 1px solid var(--black);
    width: 100%;
  }
`;
const ItemWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Item = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0.69rem;
`;
const Submit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.89rem;
`;
const StyledButton = styled.button`
  width: ${(props) => props.width};
  padding: 1.15rem;
`;

// 중앙정렬 되면서 버튼 없는 컴포넌트도 중앙정렬 되어서 정렬이 안맞는 문제 해결 위해 컴포넌트 하나 더 넣기
const Main = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
`;
