import React from "react";
import Logo from "../../../assets/images/logo.png";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { POST_Login } from "@api/sign";
import { setCookie } from "@utils/cookie";

const AdminLoginPage = () => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    getValues,
    isSubmitting,
    formState: { errors },
  } = methods;
  const navigate = useNavigate();

  const handleNavClick = () => {
    // navigate("/admin/event/enrollbrand");
    navigate("/login");
  };

  const onSubmit = (data) => {
    POST_Login(data)
      .then((data) => {
        alert("로그인되었습니다. 메인페이지로 이동합니다.");
        navigate("/user/mainpage");

        setCookie("accessToken", data.data.accessToken, {
          expires: 7,
          path: "/",
        });
        setCookie("refreshToken", data.data.refreshToken, {
          expires: 7,
          path: "/",
        });
      })
      .catch((error) => {
        alert("로그인에 실패하였습니다. 다시 시도해주세요.");
        console.log(error);
      });
  };

  return (
    <Wrap>
      <LogoImg src={Logo} alt="Logo" />
      <BoxContainer>
        <LoginTab className="cm-SRegular16">
          <Nav color="var(--semi-light-grey)" onClick={() => handleNavClick()}>
            사용자 로그인
          </Nav>
          <Nav color="var(--navy)"> 관리자 로그인</Nav>
        </LoginTab>

        <h1 className="cm-MBold24">관리자 로그인</h1>

        <form onSubmit={handleSubmit(onSubmit)}>
          <Box
            sx={{
              "& > :not(style)": { m: 1, width: "calc(100% - 1rem)" },
              display: "flex",
              flexDirection: "column",
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="email"
              name="email"
              label="EMAIL"
              variant="outlined"
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
            <TextField
              id="password"
              name="password"
              label="PASSWORD"
              variant="outlined"
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

            <FindPassword className=".cm-SRegular18">
              <Link to="/user/findpassword" style={{ visibility: "hidden" }}>
                비밀번호 찾기{">"}
              </Link>
            </FindPassword>
          </Box>

          <Submit>
            <StyledButton type="submit" className="Btn_M_Navy">
              로그인
            </StyledButton>
            <Link
              className="Btn_M_White"
              to="/user/sign"
              style={{
                width: "100%",
                padding: "1.3rem 0rem",
                visibility: "hidden",
              }}
            >
              회원가입
            </Link>
          </Submit>
        </form>
      </BoxContainer>
    </Wrap>
  );
};

export default AdminLoginPage;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  box-sizing: border-box;
  /* min-width: ; */

  /*  */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;
const LogoImg = styled.img`
  width: 16.4375rem;
  height: 5.5625rem;
`;
const BoxContainer = styled.div`
  width: 41.9735rem;
  height: 37.5625rem;
  padding: 3rem;
  box-sizing: border-box;
  background: var(--white);
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  /* gap: 4.44rem; */
  gap: 2rem;
`;
const Submit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.89rem;
`;
const StyledButton = styled.button`
  width: 100%;
`;

const FindPassword = styled.div`
  display: flex;
  justify-content: flex-end;

  a:link,
  a:visited {
    color: var(--dark-grey, #bcbcbc);
    background: none;
  }

  /* padding: 1.25rem 0 3rem 0; */
`;

const LoginTab = styled.div`
  display: flex;
  width: 100%;
`;
const Nav = styled.div`
  padding: 0.75rem 0;
  width: 100%;
  border-radius: 0.9375rem 0.9375rem 0rem 0rem;

  // 사용자로그인 or 관리자로그인 선택
  background-color: ${(props) => props.color};
  color: var(--white);
  cursor: pointer;
`;
