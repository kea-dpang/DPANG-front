import styled from "styled-components";
import DetailBox from "./DetailBox";
import Category from "@data/user/CategoryData";

const Container = styled.div`
  display: flex;
  width: 100vw;
  height: 100rem;
  justify-content: center;
  position: absolute;
  z-index: 2;
  cursor: pointer;
`;

const CategoryContainer = styled.div`
  width: 61rem;
  height: 51rem;
  background-color: white;
  border: 1px #cfcfcf solid;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 3px;
`;
const CategoryBox = styled.div`
  width: 55rem;
  height: 46rem;
  display: flex;
  flex-direction: column;
`;

const Box = styled.div`
  width: 55rem;
  height: 23rem;
  display: flex;
`;

function CategoryList(props) {
  const list = [...Category];

  return (
    // 상자의 바깥족 부분을 click하면 이벤트를 발생 시킨다
    <Container onClick={props.handleClick}>
      {/* 상자의 안쪽을 클릭하면 click 이벤트를 발생시키지 않는다 */}
      <CategoryContainer
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <CategoryBox>
          <Box>
            <DetailBox key={list[0].title} content={list[0]} />
            <DetailBox key={list[1].title} content={list[1]} />
            <DetailBox key={list[2].title} content={list[2]} />
            <DetailBox key={list[4].title} content={list[4]} />
            <DetailBox key={list[3].title} content={list[3]} />
          </Box>

          <Box>
            <DetailBox key={list[5].title} content={list[5]} />
            <DetailBox key={list[6].title} content={list[6]} />
          </Box>
        </CategoryBox>
      </CategoryContainer>
    </Container>
  );
}

export default CategoryList;
