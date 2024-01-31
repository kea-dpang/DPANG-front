import React from "react";
import styled from "styled-components";
import "../../../../styles/fonts.css";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { POST_OrderInfo } from "@api/order";
import Dropdown from "@components/Dropdown";
import { useEffect, useState } from "react";

const Change = () => {
  const [isEditing, setIsEditing] = useState(true);
  const navi = useNavigate();
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단
  const [inputValue, setInputValue] = useState({
    name:"",
    phoneNumber:"",
    address:"",
    detailaddress:"",
    deliveryRequest:"",
  });

  useEffect(() => {
    if (
      inputValue.name !== "" &&
      inputValue.phoneNumber !== "" &&
      inputValue.address !== "" &&
      inputValue.detailaddress !== "" &&
      inputValue.deliveryRequest !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    inputValue.name,
    inputValue.phoneNumber,
    inputValue.address,
    inputValue.detailaddress,
    inputValue.deliveryRequest,
  ]);

  const handleNameChange = (e) => {
    setInputValue({ ...inputValue, name: e.target.value });
  };

  const handleNumberChange = (e) => {
    setInputValue({ ...inputValue, phoneNumber: e.target.value });
  };

  const handleAddressChange = (e) => {
    setInputValue({...inputValue, address: e.target.value });
  };

  const handleDetailAddressChange = (e) => {
    setInputValue({...inputValue, detailaddress: e.target.value});
  };



  const dropdownValue = [
    "배송 메세지를 입력하세요",
    "배송 전 연락 바랍니다",
    "부재 시 경비실에 맡겨주세요",
    "문 앞에 놓아주세요",
  ]

  const [selectedDropValue, setSelectedDropValue]=useState(dropdownValue[0]);
  const handleRequest = (newStatus) => {
    setSelectedDropValue(newStatus);
  };

  const handleEdit = () => {
    setIsEditing(true);
  }

  const handleSave = () => {
    inputValue.name=inputValue.name;
    inputValue.phoneNumber=inputValue.phoneNumber;
    inputValue.address=inputValue.address;
    inputValue.detailaddress=inputValue.detailaddress;

    setIsEditing(false);
  }

  return (
    <Box
      sx={{
        "& > :not(style)": { m: 0, width: "84.875rem" },
        background: "var(--light-grey, #F4F4F4)",
        display: "flex",
        flexDirection: "column",
        gap: "1.375rem",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          "& > :not(style)": { m: 0, width: "78.5625rem" },
          display: "flex",
          flexDirection: "column",
          background: "var(--light-grey, #F4F4F4)",
          gap: "1.375rem",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChangeBox>
          <ChangeButton onClick={isEditing ? handleSave : handleEdit}>
            {isEditing ? (
              <p className="cm-SRegular16 col-White">추가</p>
            ) : (
              <p className="cm-SRegular16 col-White">수정</p>
            )}
          </ChangeButton>
        </ChangeBox>

        {isEditing ? (
          <>
            <TextField
              label="이름"
              value={inputValue.name}
              variant="outlined"
              onChange={handleNameChange}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "var(--dark-grey, #BCBCBC)", // 포커스 시 borderColor를 원하는 색상으로 변경
                  width: "33.3125rem",
                },
              }}
            />
            <TextField
              label="전화번호"
              value={inputValue.phoneNumber}
              onChange={handleNumberChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "var(--dark-grey, #BCBCBC)", // 포커스 시 borderColor를 원하는 색상으로 변경
                  width: "33.3125rem",
                },
              }}
            />

            <AddressContainer>
              <TextField
                label="주소"
                value={inputValue.address}
                onChange={handleAddressChange}
                variant="outlined"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderColor: "var(--dark-grey, #BCBCBC)", // 포커스 시 borderColor를 원하는 색상으로 변경
                    width: "63.4375rem",
                  },
                }}
              />
              <SearchButton onClick={() => window.open("user/order/address")}>
                <p className="cm-SRegular16 col-Black">주소 찾기</p>
              </SearchButton>
            </AddressContainer>

            <TextField
              label="상세주소"
              value={inputValue.detailaddress}
              onChange={handleDetailAddressChange}
              variant="outlined"
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "var(--dark-grey, #BCBCBC)", // 포커스 시 borderColor를 원하는 색상으로 변경
                  width: "63.4375rem",
                },
              }}
            />
          </>
        ) : (
          <>
            <p className="cm-SBold18 col-Black">{inputValue.name}</p>
            <p className="cm-SBold16 col-Black">{inputValue.phone}</p>
            <p className="cm-SRegular16 col-Black">
              {inputValue.address}, {inputValue.detailaddress}
            </p>
          </>
        )}
      </Box>

      <Box
        sx={{
          "& > :not(style)": { m: 0, width: "78.5625rem" },
          padding: "2.75rem 0rem 2.75rem 0rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "65.625rem",
        }}
      >
        <Dropdown fullWidth
          value={dropdownValue}
          onChange={handleRequest}
        />
      </Box>
    </Box>
  );
};

export default Change;



const ChangeBox = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3rem 0rem 0.2rem 0rem;
`;

const ChangeButton = styled.button`
  width: 5.2rem;
  height: 2.1875rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  background: var(--navy, #043277);
  align-items: center;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1.06rem;
`;

const SearchButton = styled.button`
  display: flex;
  width: 4.6875rem;
  justify-content: center;
  align-items: center;
  gap: 0.3125rem;
  flex-shrink: 0;
  border-radius: 0.1875rem;
  border: 1px solid var(--navy, #043277);
  background: var(--white, #fff);
`;
