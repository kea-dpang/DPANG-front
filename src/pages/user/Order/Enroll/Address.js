import { PATCH_Address } from "@api/cartOrder";
import { TextField } from "@mui/material";
import React, { useEffect } from "react";
import { useForm, useFormContext } from "react-hook-form";
import styled from "styled-components";

const EnrollAddress = ({ data, handleAddressSubmit }) => {
  console.log("데이터 유무 확인:", data);

  const methods = useFormContext();

  // data가 비동기적으로 로드되는 경우, 컴포넌트가 처음 렌더링될 때 data값이 아직 설정되지 않았을 수 있으므로 data가 업데이트 될 때마다 form 값을 업데이트
  useEffect(() => {
    if (data) {
      setValue("name", data.name);
      setValue("phoneNumber", data.phoneNumber);
      setValue("zipCode", data.zipCode);
      setValue("address", data.address);
      setValue("detailAddress", data.detailAddress);
    }
  }, [data]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useFormContext();

  const onSubmit = (userData) => {
    // console.log("patch axios 연결할 데이터", userData);
    // api patch 연동
    PATCH_Address(userData)
      .then((data) => {
        console.log("axiossss", data);
        setValue("edit", false); // 추가 버튼을 눌렀으므로 'edit' 상태를 false로 설정
        // 부모 컴포넌트에게 폼 데이터 전달
        handleAddressSubmit(userData);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Wrap>
      {/* handleSubmit에 부모 컴포넌트에서 전달된 onSubmit 함수를 전달합니다. */}
      <Form onSubmit={handleSubmit(onSubmit)}>
        <BtnWrap>
          <StyledBtn className="Btn_M_Navy">추가</StyledBtn>
        </BtnWrap>
        <StyledTextField
          id="name"
          // label="이름"
          variant="outlined"
          style={{ width: "40%" }}
          // defaultValue={data?.name} // 초기 값 설정

          // value={data?.name}
          value={data?.name || ""}
          // readOnly // 수정할 수 없도록 설정
          disabled
          // error={!!errors.name}
          // helperText={errors.name && errors.name.message}
          {...register(
            "name"
            // {
            //   required: "이름은 필수 입력입니다.",
            // }
          )}
        />
        <StyledTextField
          id="phone"
          label="전화번호"
          variant="outlined"
          style={{ width: "40%" }}
          defaultValue={data?.phoneNumber} // 초기 값 설정
          // placeholder="000-0000-0000"
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber && errors.phoneNumber.message}
          {...register("phoneNumber", {
            required: "전화번호는 필수 입력입니다.",
            pattern: {
              // value: /^01(?:0|1|[6-9])-(?:\d{3}|\d{4})-\d{4}$/,
              value: /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/,
              message: "올바른 전화번호 형식을 입력해주세요. 예) 01012345678",
            },
          })}
        />
        <StyledTextField
          id="zipCode"
          label="우편번호"
          variant="outlined"
          style={{ width: "40%" }}
          defaultValue={data?.zipCode} // 초기 값 설정
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
          // defaultValue={data?.address} // 초기 값 설정
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
          // defaultValue={data?.detailAddress} // 초기 값 설정
          {...register("detailAddress")}
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
