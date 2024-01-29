import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { GET_BrandList } from "@api/Brand";

const Brand = () => {
  const [brand, setBrand] = useState([]);
  useEffect(() => {
    GET_BrandList()
      .then((data) => {
        setBrand(data.data.content);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (item) => {
    console.log(item);
  };
  return (
    <>
      {brand.length > 0 && (
        <Wrap>
          {brand.map((item, index) => (
            <Item
              className="cm-SRegular16 col-Black"
              key={index}
              onClick={() => handleClick(item.name)}
            >
              {item.name}
            </Item>
          ))}
        </Wrap>
      )}
    </>
  );
};

export default Brand;

const Wrap = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-bottom: 1rem;
`;
const Item = styled.div`
  width: 17.5625rem;
  padding: 0.3rem 3rem;
  box-sizing: border-box;
  cursor: pointer;

  &:hover {
    color: var(--navy);
  }
`;
