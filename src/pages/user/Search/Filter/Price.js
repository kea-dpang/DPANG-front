import styled from "styled-components";
import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Price = () => {
  const [value, setValue] = React.useState([0, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Wrap>
      {/* 가격 슬라이더 */}
      <Box sx={{ width: 230 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          sx={{
            "& .MuiSlider-thumb": {
              width: 20, // thumb(슬라이더 조절하는 원형 부분)의 크기
              height: 20,
              color: "var(--white)",
              border: "2px solid var(--navy)", // thumb에 테두리 추가
            },
            "& .MuiSlider-rail": {
              height: 8, // rail(슬라이더의 바탕선 부분)의 두께
              color: "var(--semi-light-grey)",
            },
            "& .MuiSlider-track": {
              height: 8, // track(슬라이더의 활성선 부분)의 두께
              color: "var(--navy)",
            },
          }}
        />
      </Box>
      {/* 지정한 가격 표로 보여주기 */}
      <MinMaxPrice>
        <PriceBox className="cm-XsBold14">
          <div className="col-Navy"> 최저요금 </div>
          <div className="col-Black"> ₩ {value[0]}</div>
        </PriceBox>
        <div className="col-SemiLightGrey"> - </div>
        <PriceBox className="cm-XsBold14">
          <div className="col-Navy"> 최대요금 </div>
          <div className="col-Black"> ₩ {value[1]}</div>
        </PriceBox>
      </MinMaxPrice>
    </Wrap>
  );
};

export default Price;

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;
const MinMaxPrice = styled.div`
  display: flex;
  width: 14.5rem;
  align-items: center;
  gap: 0.375rem;
  justify-content: center;
`;
const PriceBox = styled.div`
  // width: 6.3125rem;
  // height: 2.75rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.3125rem;
  border: 1px solid var(--dark-grey);
  display: inline-flex;
  padding: 0.375rem 2.875rem 0.375rem 0.5625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;
