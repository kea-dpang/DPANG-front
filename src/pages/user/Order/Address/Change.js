import React, { useState } from "react";
import styled from "styled-components";
import InfoData from "assets/data/user/UserShipData";
import "../../../../styles/fonts.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import { Modal } from "@mui/material";
import TextField from "@mui/material/TextField";

const Change = () => {
  const navi = useNavigate();
  const [message, setMessage] = React.useState("");
  const [name, setName] = useState(InfoData.name);
  const [phone, setPhone] = useState(InfoData.phone);
  const [address, setAddress] = useState(InfoData.address);
  const [detailaddress, setDetailAddress] = useState(InfoData.detailaddress);
  const [isEditing, setIsEditing] = useState(true);

  const handleChange = (event) => {
    setMessage(event.target.value);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    InfoData.name = name;
    InfoData.phone = phone;
    InfoData.address = address;
    InfoData.detailaddress = detailaddress;

    setIsEditing(false);
  };

  console.log(InfoData);

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
              value={name}
              variant="outlined"
              onChange={(e) => setName(e.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderColor: "var(--dark-grey, #BCBCBC)", // 포커스 시 borderColor를 원하는 색상으로 변경
                  width: "33.3125rem",
                },
              }}
            />
            <TextField
              label="전화번호"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
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
                value={address}
                onChange={(e) => setAddress(e.target.value)}
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
              value={detailaddress}
              onChange={(e) => setDetailAddress(e.target.value)}
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
            <p className="cm-SBold18 col-Black">{InfoData.name}</p>
            <p className="cm-SBold16 col-Black">{InfoData.phone}</p>
            <p className="cm-SRegular16 col-Black">
              {InfoData.address}, {InfoData.detailaddress}
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
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            배송 메세지를 선택하세요
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={message}
            label="Message"
            onChange={handleChange}
          >
            <MenuItem value={10}>배송 전 연락 바랍니다</MenuItem>
            <MenuItem value={20}>부재 시 경비실에 맡겨주세요</MenuItem>
            <MenuItem value={30}>문 앞에 놓아주세요</MenuItem>
          </Select>
        </FormControl>
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
