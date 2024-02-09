import React from "react";
import { useFormContext } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Address = ({ data }) => {
  const methods = useFormContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useFormContext();

  const handleEdit = () => {
    setValue("edit", true); // 수정 버튼을 눌렀으므로 'edit' 상태를 true로 설정
  };

  return (
    <Wrap>
      <BtnWrap>
        <StyledBtn onClick={handleEdit} className="Btn_M_Navy">
          수정
        </StyledBtn>
      </BtnWrap>
      <Wrap2>
        <Content>
          <p className="cm-MBold20">{data.name}</p>
          <p className="cm-MBold20">{data.phoneNumber}</p>
        </Content>

        <Content className="cm-SRegular18">
          <AddressWrap>
            <p>({data.zipCode})</p>
            <p>{data.address}</p>
          </AddressWrap>
          <p>{data.detailAddress}</p>
        </Content>
      </Wrap2>
    </Wrap>
  );
};

export default Address;
const Wrap = styled.div`
  background: var(--light-grey, #f4f4f4);
  padding: 3rem;
`;
const Wrap2 = styled.div`
  /* border: 1px solid black; */
  display: flex;
  flex-direction: column;
  gap: 2rem;
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
const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;
const AddressWrap = styled.div`
  display: flex;
  gap: 0.5rem;
`;
