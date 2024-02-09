import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

// name: "윤서진",
// phoneNumber: "010-1234-5678",
// zipCode: "461831",
// address: "경기 성남시 수정구 복호동 495",
// detailAddress: "AI공학관 411",
const Address = ({ data }) => {
  return (
    <Wrap>
      <BtnWrap>
        <StyledBtn className="Btn_M_Navy">수정</StyledBtn>
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
