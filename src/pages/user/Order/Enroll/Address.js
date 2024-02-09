import { TextField } from "@mui/material";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const EnrollAddress = ({ data }) => {
  const methods = useForm();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (userData) => {
    console.log(userData);
  };
  return (
    <Wrap>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BtnWrap>
          <StyledBtn className="Btn_M_Navy">추가</StyledBtn>
        </BtnWrap>
        <StyledTextField
          id="name"
          label="이름"
          variant="outlined"
          style={{ width: "40%" }}
          error={!!errors.name}
          helperText={errors.name && errors.name.message}
          {...register("name", {
            required: "이름은 필수 입력입니다.",
          })}
        />
        <StyledTextField
          id="phone"
          label="전화번호"
          variant="outlined"
          style={{ width: "40%" }}
          placeholder="000-0000-0000"
          error={!!errors.phone}
          helperText={errors.phone && errors.phone.message}
          {...register("phone", {
            required: "전화번호는 필수 입력입니다.",
            pattern: {
              value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
              message: "올바른 전화번호 형식을 입력해주세요. 예) 010-1234-5678",
            },
          })}
        />
        <StyledTextField
          id="zipCode"
          label="우편번호"
          variant="outlined"
          style={{ width: "40%" }}
          error={!!errors.zipCode}
          helperText={errors.zipCode && errors.zipCode.message}
          {...register("zipCode", {
            required: "우편번호는 필수 입력입니다.",
            pattern: {
              value: /^\d{5}$/,
              message: "올바른 우편번호 형식을 입력해주세요.",
            },
          })}
        />
        <StyledTextField
          id="address"
          label="주소"
          variant="outlined"
          style={{ width: "70%" }}
          error={!!errors.address}
          helperText={errors.address && errors.address.message}
          {...register("address", {
            required: "주소는 필수 입력입니다.",
          })}
        />
        <StyledTextField
          id="detail"
          label="상세주소"
          variant="outlined"
          style={{ width: "70%" }}
          {...register("detail")}
        />
      </Form>
    </Wrap>
  );
};

export default EnrollAddress;

const Wrap = styled.div`
  background: var(--light-grey, #f4f4f4);
  padding: 2rem;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;
const StyledTextField = styled(TextField)`
  & .MuiOutlinedInput-root {
    background-color: white;
  }
`;
const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const StyledBtn = styled.button`
  height: 2.5rem;
  width: 5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;
