import styled from "styled-components";
import React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const Price = ({ value, setValue }) => {
  // const [value, setValue] = React.useState([0, 0]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const handleMinChange = (event) => {
    setValue([Number(event.target.value), value[1]]);
  };

  const handleMaxChange = (event) => {
    setValue([value[0], Number(event.target.value)]);
  };

  return (
    <Wrap>
      {/* 가격 슬라이더 */}
      <Box sx={{ width: 200 }}>
        <Slider
          getAriaLabel={() => "Temperature range"}
          value={value}
          onChange={handleChange}
          valueLabelDisplay="auto"
          step={1000}
          max={2000000}
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
          <PriceSelect>
            ₩
            <input
              type="number"
              value={value[0]}
              onChange={handleMaxChange}
              style={{ border: "none", width: "60px", display: "inline" }}
            />
          </PriceSelect>
        </PriceBox>
        <div className="col-SemiLightGrey"> - </div>
        <PriceBox className="cm-XsBold14">
          <div className="col-Navy"> 최대요금 </div>
          <PriceSelect>
            {/* <div className="col-Black"> ₩ {value[1].toLocaleString()}</div> */}
            ₩
            <input
              type="number"
              value={value[1]}
              onChange={handleMaxChange}
              style={{ border: "none", width: "60px", display: "inline" }}
            />
          </PriceSelect>
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
  padding: 1rem;
  display: flex;
  align-items: center;
  gap: 0.375rem;
  justify-content: center;
`;
const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 0.3125rem;
  border: 1px solid var(--dark-grey);
  display: inline-flex;
  padding: 0.375rem 0.5625rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 0.25rem;
`;
const PriceSelect = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
