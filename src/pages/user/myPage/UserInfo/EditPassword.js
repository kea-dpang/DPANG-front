import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { useForm } from "react-hook-form";
import { POST_changePassword } from "@api/sign";
import { useNavigate } from "react-router-dom";
import { useConfirmAlert, useErrorAlert } from "@components/SweetAlert";

const EditPassword = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
    getValues,
  } = methods;
  const navigete = useNavigate();

  // alert
  const showErrorAlert = useErrorAlert();
  const showConfirmAlert = useConfirmAlert();

  const onSubmit = (data) => {
    // alert(JSON.stringify(data));
    POST_changePassword(data)
      .then((data) => {
        showConfirmAlert({
          title: "비밀번호 재설정에 성공하였습니다.",
          navi: "/user/mypage/userinfo",
        });
      })
      .catch((error) => {
        if (error.response.status === 400) {
          showErrorAlert({
            title: "비밀번호가 일치하지 않습니다.",
          });
        } else {
          showErrorAlert({
            title: "비밀번호 재설정에 실패하였습니다.",
            text: "잠시 후 다시 시도해 주세요.",
          });
          console.log(error);
        }
      });
  };

  return (
    <Wrap>
      <Title>
        <h1 className="cm-LBold30">비밀번호 재설정</h1>
      </Title>

      <Main>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            //   component="form"
            //   onSubmit={handleSubmit}
            sx={{
              "& > :not(style)": { m: 1, width: "33.3125rem" },
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="current-pass"
              label="현재 비밀번호"
              variant="outlined"
              type="password"
              error={!!errors.current}
              helperText={errors.current && errors.current.message}
              {...register("current", {
                required: "현재 비밀번호는 필수 입력입니다.",
              })}
            />
            <TextField
              id="new-pass"
              label="신규 비밀번호"
              variant="outlined"
              type="password"
              error={!!errors.new}
              helperText={errors.new && errors.new.message}
              {...register("new", {
                required: "신규 비밀번호는 필수 입력입니다.",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
                  message:
                    "비밀번호는 8~15자 이내이며, 최소 하나의 대문자, 소문자, 숫자, 특수 문자가 포함되어야 합니다.",
                },
              })}
            />
            <TextField
              id="new-pass-check"
              label="신규 비밀번호 확인"
              variant="outlined"
              type="password"
              error={!!errors.newCheck}
              helperText={errors.newCheck && errors.newCheck.message}
              {...register("newCheck", {
                required: "비밀번호 확인은 필수 입력입니다.",
                validate: (value) =>
                  value === getValues("new") || "비밀번호가 일치하지 않습니다.",
              })}
            />
          </Box>

          <Submit>
            <button type="submit" className="Btn_M_Navy">
              비밀번호 재설정
            </button>
          </Submit>
        </form>
      </Main>
    </Wrap>
  );
};

export default EditPassword;

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
const Main = styled.div`
  padding: 3rem 0 3rem 3rem;
  /* display: flex;
    flex-direction: column; */
`;
const Submit = styled.div`
  padding-top: 10rem;
  display: flex;
  justify-content: flex-end;
`;
