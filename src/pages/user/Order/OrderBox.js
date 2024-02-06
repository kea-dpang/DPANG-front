import styled from "styled-components";
import React, { useEffect, useState } from "react";
import "../../../styles/fonts.css";
import Box from "@mui/material/Box";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import { Link, useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import { POST_OrderInfo } from "@api/order";
import Dropdown from "@components/Dropdown";
import CartList from "@userPages/Cart/CartList";


const Index = () => {
  const [open, setOpen] = React.useState(true);
  const [orederItems, setOrderItems] = useState([CartList]);

  const handleClick = () => {
    setOpen(!open);
  };

  const [isEditing, setIsEditing] = useState(true);
  const navi = useNavigate();
  const [isFormValid, setFormValid] = useState(false); // 입력값 다 입력했는지 판단
  const [inputValue, setInputValue] = useState({
    name:"",
    phoneNumber:"",
    zipCode:"",
    address:"",
    detailaddress:"",
    deliveryRequest:"",
    itemId:0,
    quantity:0
  });

  useEffect(() => {
    if (
      inputValue.name !== "" &&
      inputValue.phoneNumber !== "" &&
      inputValue.zipCode !== "" &&
      inputValue.address !== "" &&
      inputValue.deliveryRequest !== ""
    ) {
      setFormValid(true);
    } else {
      setFormValid(false);
    }
  }, [
    inputValue.name,
    inputValue.phoneNumber,
    inputValue.zipCode,
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

  const handleZipCodeChange = (e) => {
    setInputValue({...inputValue, zipCode: e.target.value });
  }

  const handleAddressChange = (e) => {
    setInputValue({...inputValue, address: e.target.value });
  };

  const handleDetailAddressChange = (e) => {
    setInputValue({...inputValue, detailaddress: e.target.value});
  };

  const handleDeliveryRequestChange = () => {
    setInputValue({...inputValue, deliveryRequest: {handleRequest}})
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
    inputValue.zipCode = inputValue.zipCode;
    inputValue.address=inputValue.address;
    inputValue.detailaddress=inputValue.detailaddress;
    inputValue.deliveryRequest=inputValue.deliveryRequest;

    setIsEditing(false);
  }


  const handleSubmit = () => {
    console.log("등록할게: ", inputValue);
    POST_OrderInfo(inputValue)
      .then((data) => {
        console.log("주문 등록", data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  

  
  return (
    <Wrap>
      <List
        sx={{
          width: "100%",
          maxWidth: "84.875rem",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        component="nav"
      >
        <ListItemButton
          onClick={handleClick}
          sx={{
            width: "84.875rem",
            backgroundcolor: "white",
            border: "1px solid #000",
          }}
        >
          <ListItemText className="cm-SBold24 col-Black">
            배송지 정보
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                width: "84.875rem",
                minHeight: "37rem",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <AddressBox>
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
                        <TextField
                          label="우편번호"
                          value={inputValue.zipCode}
                          onChange={handleZipCodeChange}
                          variant="outlined"
                          sx={{
                            "& .MuiOutlinedInput-root": {
                              borderColor: "var(--dark-grey, #BCBCBC)",
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
                        <p className="cm-SRegular16 col-Black">{inputValue.phoneNumber}</p>
                        <p className="cm-SRegular16 col-Black">우편번호 {inputValue.zipCode}</p>
                        <p className="cm-SRegular16 col-Black">
                          {inputValue.address} {inputValue.detailaddress}
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
                      onChange={handleDeliveryRequestChange}
                    />
                    
                  </Box>
              </AddressBox>
            </ListItemButton>
          </List>
        </Collapse>
      </List>

      <List
        sx={{
          width: "100%",
          maxWidth: "84.875rem",
          alignItems: "center",
          justifyContent: "center",
          alignItems: "center",
        }}
        component="nav"
      >
        <ListItemButton
          onClick={handleClick}
          sx={{
            width: "84.875rem",
            backgroundcolor: "white",
            border: "1px solid #000",
          }}
        >
          <ListItemText className="cm-SBold24 col-Black">
            주문 정보
          </ListItemText>
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton
              sx={{
                width: "84.875rem",
                display: "flex",
                flexDirection: "column",
              }}
            >

              <OrderContainer>
                {orederItems.map((item) => (
                <CartList 
                key={item.itemId}
                quantity={item.updateQuantity} />
                ))}
              </OrderContainer>
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      
      <Button
            onClick={handleSubmit}
            type="submit"
            className="Btn_S_Navy"
            disabled={!isFormValid}
            style={{
              width: "74.625rem",
              height: "4.1875rem",
              gap: "0.3125rem",
              ...(!isFormValid
                ? {
                    backgroundColor: "var(--semi-light-grey)",
                    cursor: "not-allowed",
                  }
                : {}
              )
            }}
          >
            <p className="cm-SBold16">주문하기</p>
          </Button>
    </Wrap>
  );
};

export default Index;

const Wrap = styled.div`
  width: 100vw;
  max-width: 100%;
  box-sizing: border-box;
  min-width: 1550px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const AddressBox = styled.div`
  width: 84.875rem;
  background-color: var(--light-grey, #F4F4F4);
  display: flex;
  flex-Direction: column;
  gap: 1.375rem;
  justify-Content: center;
  align-Items: center;
`;

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


const OrderContainer = styled.div`
  width: 84.875rem;
  background-color: var(--light-grey, #F4F4F4);
  display: flex;
  flex-Direction: column;
  gap: 1.375rem;
  justify-Content: center;
  align-Items: center;
`;

const P = styled.div`
  width: 25rem;
`;

