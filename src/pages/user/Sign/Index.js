import { FormProvider, useForm } from "react-hook-form";
import Terms from "./Terms";
import styled from "styled-components";
import Logo from "@images/logo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { TermsData } from "../../../assets/data/user/UserTermsData";
import { useNavigate } from "react-router-dom";
import { POST_User } from "@api/sign";
import { useConfirmAlert, useErrorAlert } from "@components/SweetAlert";

const SignPage = () => {
  const methods = useForm({
    defaultValues: {
      // 여기에다가 Terms 정의(같이 사용하므로)
      all: false,
      terms: TermsData.reduce(
        (acc, term) => ({ ...acc, [term.id]: false }),
        {}
      ),
    },
  });
  const {
    register,
    handleSubmit,
    getValues,
    isSubmitting,
    formState: { errors },
  } = methods;
  const navigate = useNavigate();

  // alert
  const showErrorAlert = useErrorAlert();
  const showConfirmAlert = useConfirmAlert();

  const onSubmit = (data) => {
    POST_User(data)
      .then((data) => {
        showConfirmAlert({
          title: "회원가입에 성공하였습니다.",
          text: "로그인 페이지로 이동합니다.",
          navi: "/login",
        });
        console.log(data);
      })
      .catch((error) => {
        // 요청이 실패했을 때의 처리
        if (error.response.status === 400) {
          showErrorAlert({
            title: "이미 존재하는 이메일입니다.",
            text: "로그인 페이지로 이동합니다.",
            navi: "/login",
          });
        } else {
          showErrorAlert({
            title: "회원가입에 실패하였습니다.",
            text: "잠시 후 다시 시도해 주세요.",
          });
        }
      });
    // alert(JSON.stringify(data));
  };

  return (
    <Wrap>
      <LogoImg src={Logo} alt="Logo" />
      <BoxForm onSubmit={handleSubmit(onSubmit)}>
        <FormProvider {...methods}>
          <h1 className="cm-XLBold36">회원가입</h1>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "33.3125rem" },
              display: "flex",
              flexDirection: "column",
              textAlign: "left",
              alignItems: "center",
            }}
            noValidate
            autoComplete="off"
          >
            <p>사원번호</p>
            <TextField
              id="employeeId"
              variant="outlined"
              name="employeeId"
              error={!!errors.employeeId}
              helperText={errors.employeeId && errors.employeeId.message}
              {...register("employeeId", {
                required: "사원번호는 필수 입력입니다.",
              })}
            />
            <p>아이디(회사 이메일)</p>
            <TextField
              id="email"
              variant="outlined"
              name="email"
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
            <p>비밀번호</p>
            <TextField
              id="password"
              variant="outlined"
              name="password"
              type="password"
              error={!!errors.password}
              helperText={errors.password && errors.password.message}
              {...register("password", {
                required: "비밀번호는 필수 입력입니다.",
                pattern: {
                  value:
                    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,15}$/,
                  message:
                    "비밀번호는 8~15자 이내이며, 최소 하나의 대문자, 소문자, 숫자, 특수 문자가 포함되어야 합니다.",
                },
              })}
            />
            <p>비밀번호 확인</p>
            <TextField
              id="passwordCheck"
              variant="outlined"
              name="passwordCheck"
              type="password"
              error={!!errors.passwordCheck}
              helperText={errors.passwordCheck && errors.passwordCheck.message}
              {...register("passwordCheck", {
                required: "비밀번호 확인은 필수 입력입니다.",
                validate: (value) =>
                  value === getValues("password") ||
                  "비밀번호가 일치하지 않습니다.",
              })}
            />
            <p>이름</p>
            <TextField
              id="name"
              variant="outlined"
              name="name"
              error={!!errors.name}
              helperText={errors.name && errors.name.message}
              {...register("name", {
                required: "이름은 필수 입력입니다.",
              })}
            />
            <p>입사일</p>
            <TextField
              id="joinDate"
              variant="outlined"
              name="joinDate"
              placeholder="YYYY-MM-DD 형식으로 입력해주세요."
              error={!!errors.joinDate}
              helperText={errors.joinDate && errors.joinDate.message}
              {...register("joinDate", {
                required: "입사일은 필수 입력입니다.",
                pattern: {
                  value: /^\d{4}-\d{2}-\d{2}$/,
                  message: "YYYY-MM-DD 형식으로 입력해주세요.",
                },
              })}
            />
          </Box>

          <Terms />
          {/* <Terms formMethods={methods} /> */}

          <Submit>
            <StyledButton
              type="submit"
              className="Btn_M_Navy"
              disabled={isSubmitting}
            >
              가입하기
            </StyledButton>
          </Submit>
        </FormProvider>
      </BoxForm>
    </Wrap>
  );
};

export default SignPage;

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
const LogoImg = styled.img`
  width: 16.4375rem;
  height: 5.5625rem;
`;
const BoxForm = styled.form`
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
  justify-content: space-between;
  align-items: center;

  // TextField(textarea) 부분이 p태그 제외하고 Box부모태그를 꽉 채우게 하기 위해
  & > p {
    flex: 1;
  }

  & > .MuiTextField-root {
    flex: 3;
  }
`;
const Submit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.89rem;
`;
const StyledButton = styled.button`
  width: 20.3125rem;
`;
