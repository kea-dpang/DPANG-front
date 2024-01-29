import styled from "styled-components";
import React, { useState, useEffect } from "react";
import dayjs from "dayjs";
import "@styles/fonts.css";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import Fab from "@mui/material/Fab";
import PhotoIcon from "@mui/icons-material/Photo";
import DeleteIcon from "@mui/icons-material/Delete";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import TempDetailData from "@data/user/ProductEventDetailData";

const Index = ({ eventId }) => {
  const [eventData, setEventData] = useState(null);
  const [code, setCode] = useState([]);
  const [productList, setProductList] = useState([]);

  // eventId가 인식되면 id를 통해 상품상세정보 저장 (eventData)
  useEffect(() => {
    const matchedData = TempDetailData.find(
      (data) => data.eventId === Number(eventId)
    );
    setEventData(matchedData);
  }, [eventId]);

  useEffect(() => {
    console.log(eventData);
  }, [eventData]);

  // 이벤트 이름 변경 감지
  const handleNameChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      title: e.target.value,
    }));
  };
  // 이벤트 시작일 변경 감지
  const handleStartChange = (date) => {
    setEventData((prevData) => ({
      ...prevData,
      startDate: date.format("YYYY-MM-DD HH:mm:ss"),
    }));
  };
  // 이벤트 종료일 변경 감지
  const handleEndChange = (date) => {
    setEventData((prevData) => ({
      ...prevData,
      endDate: date.format("YYYY-MM-DD HH:mm:ss"),
    }));
  };
  // 이벤트 상품 변경 감지
  const handleCodeChange = (e) => {
    setCode(e.target.value); // TextField의 값을 code 상태에 저장
  };
  // 대상상품코드 추가할 때 엔터눌러서 추가하기 (최종 상품등록 x)
  const onKeyPress = (e) => {
    if (e.key === "Enter") {
      // enter key 누르면
      e.preventDefault(); // 최종 상품등록 버튼이 눌리는 것을 방지
      setEventData((prevData) => ({
        ...prevData,
        eventItems: [...prevData.eventItems, e.target.value],
      }));
      setCode(""); // 텍스트박스 리셋
    }
  };
  // 적용상품 삭제
  const handleItemDelete = (productToDelete) => () => {
    setEventData((prevData) => ({
      ...prevData,
      eventItems: prevData.eventItems.filter(
        (product) => product !== productToDelete
      ),
    }));
  };
  // 이벤트 할인율 변경 감지
  const handlePercentChange = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      discount: e.target.value,
    }));
  };
  const handleImageChange = (e) => {};
  // 이미지 삭제 감지
  const handleImageDelete = (e) => {
    setEventData((prevData) => ({
      ...prevData,
      eventBannerUrL: null,
    }));
  };
  // 수정 완료 버튼 : 이벤트 이름, 시작일, 종료일, 내용, 상품코드, 할인율, 적용상품 정보 저장
  const handleSubmit = () => {
    // 이미지가 null값이면 수정 못하게 하기
    console.log("이벤트 이름: ", eventData.title);
    console.log("적용상품", eventData.eventItems);
    console.log("이벤트 할인율", eventData.discount);
    //setShowAlert(true); // Alert 보여주기
    alert("이벤트 수정 성공");
  };

  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      {eventData && (
        <Wrap>
          {/* 상품 정보 수정칸 */}
          <Table>
            {/* 이벤트 이름 수정 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 이름</p>
              <Content>
                <Box
                  sx={{
                    "& > :not(style)": { m: 0, width: "61rem" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="eventname"
                    onChange={handleNameChange}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--navy)", // 포커스 시 borderColor를 원하는 색상으로 변경
                        },
                      },
                    }}
                    placeholder="이벤트 이름을 입력해주세요"
                    defaultValue={eventData.title} // 기본값 설정
                  />
                </Box>
              </Content>
            </Row>
            {/* 이벤트 시작일 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 시작일</p>
              <Content>
                <Box
                  sx={{
                    "& > :not(style)": { m: 0, width: "61rem" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="이벤트 시작일"
                        value={dayjs(eventData.startDate)}
                        onChange={handleStartChange}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </Content>
            </Row>
            {/* 이벤트 종료일 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 종료일</p>
              <Content>
                <Box
                  sx={{
                    "& > :not(style)": { m: 0, width: "61rem" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="이벤트 종료일"
                        value={dayjs(eventData.endDate)}
                        onChange={handleEndChange}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                </Box>
              </Content>
            </Row>
            {/* 대상 상품 코드 */}
            <Row>
              <p className="cm-SBold16 col-Black">대상 상품 코드</p>
              <Content>
                <Box
                  sx={{
                    "& > :not(style)": { m: 0, width: "61rem" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="code"
                    value={code} // TextField의 value를 code로 설정
                    onChange={handleCodeChange}
                    onKeyPress={onKeyPress} // 입력을 감지하는 이벤트 추가
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--navy)", // 포커스 시 borderColor를 원하는 색상으로 변경
                        },
                      },
                    }}
                    placeholder="대상 상품 코드를 입력해주세요"
                  />
                </Box>
              </Content>
            </Row>
            {/* 이벤트 적용 상품 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 적용 상품</p>
              <Content>
                <Box
                  sx={{
                    "& > :not(style)": { m: 0, width: "61rem" },
                    display: "flex",
                    flexDirection: "column",
                    height: "3rem",
                    justifyContent: "center",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <Stack direction="row" spacing={1}>
                    {eventData.eventItems.map((product, index) => (
                      <Chip
                        key={index}
                        label={product}
                        onDelete={handleItemDelete(product)}
                      />
                    ))}
                  </Stack>
                </Box>
              </Content>
            </Row>
            {/* 이벤트 할인율 */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 할인율</p>
              <Content>
                <Box
                  sx={{
                    "& > :not(style)": { m: 0, width: "61rem" },
                    display: "flex",
                    flexDirection: "column",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="salepercent"
                    onChange={handlePercentChange}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    sx={{
                      "& .MuiOutlinedInput-root": {
                        "&.Mui-focused fieldset": {
                          borderColor: "var(--navy)", // 포커스 시 borderColor를 원하는 색상으로 변경
                        },
                      },
                    }}
                    placeholder="이벤트 할인율을 입력해주세요."
                    defaultValue={eventData.discount} // 기본값 설정
                  />
                </Box>
              </Content>
            </Row>
            {/* 이벤트 내용(사진) */}
            <Row>
              <p className="cm-SBold16 col-Black">이벤트 내용</p>
              <Content>
                <Box
                  sx={{
                    "& > :not(style)": { m: 1 },
                    display: "flex",
                    flexDirection: "column",
                  }}
                  noValidate
                  autoComplete="off"
                >
                  {eventData.eventBannerUrL ? (
                    <div
                      style={{ position: "relative" }}
                      onMouseEnter={() => setIsHovered(true)}
                      onMouseLeave={() => setIsHovered(false)}
                    >
                      <img
                        src={eventData.eventBannerUrL}
                        alt="이벤트 배너"
                        style={{ width: "100%", height: "auto" }}
                      />
                      {isHovered && (
                        <div
                          style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            backgroundColor: "rgba(0, 0, 0, 0.5)",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            transition: "opacity 0.3s",
                            cursor: "pointer",
                          }}
                        >
                          {/* 사진에 마우스 hover시, 삭제아이콘 등장 */}
                          <button
                            onClick={handleImageDelete}
                            style={{
                              backgroundColor: "transparent",
                              border: "none",
                            }}
                          >
                            <DeleteIcon
                              style={{ color: "var(--light-grey)" }}
                            />{" "}
                          </button>
                        </div>
                      )}
                    </div>
                  ) : (
                    // 사진 선택하는 로직 넣기
                    <Fab color="inherit" aria-label="add">
                      <PhotoIcon color="var(--light-grey)" />
                    </Fab>
                  )}
                </Box>
              </Content>
            </Row>
          </Table>

          {/* 등록버튼 */}
          <Submit>
            <button type="submit" className="Btn_S_Navy" onClick={handleSubmit}>
              수정 완료
            </button>
          </Submit>

          {/* Alert
               {showAlert && (
                   <Stack 
                       sx={{ 
                           width: '85%', 
                           position: 'fixed', // 화면에 고정
                           top: 0, // 화면의 가장 위에 배치
                           right: 0, // 화면의 가장 오른쪽에 배치
                           zIndex: 9999, // 가장 앞쪽에 배치
                       }} 
                       spacing={2}
                   >
                       <Alert onClose={() => setShowAlert(false)}>이벤트가 등록되었습니다.</Alert>
                   </Stack>
               )} */}
        </Wrap>
      )}
    </>
  );
};

export default Index;
const Wrap = styled.div`
  display: flex;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 6.25rem 7.5rem;
  flex-direction: column;
  align-items: center;
  gap: -0.0625rem;
`;
const Table = styled.div`
  display: flex;
  flex-direction: column;
  width: 88.9375rem;
  box-sizing: border-box; // padding까지 합쳐서 width 설정하기
  padding: 0rem 7.5rem 1rem 7.5rem;
`;
const Row = styled.div`
  border-top: 1px solid var(--black);
  &:last-child {
    border-bottom: 1px solid var(--black);
  }
  display: flex;
  p {
    background: var(--light-grey, #f4f4f4);
    /* padding: 2rem; */
    width: 13rem;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
`;
const Content = styled.div`
  width: 100%;
  margin: 1rem;
`;
const Submit = styled.div`
  padding-top: 3rem;
  display: flex;
  justify-content: flex-end;
`;
