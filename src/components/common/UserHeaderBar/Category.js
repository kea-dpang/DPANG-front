import styled from "styled-components";
import menuimg from "../../../assets/images/menu.svg";

const CategoryBox = styled.div`
  width: 7rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;

`;

const MenuBox = styled.div`
  width: 1.5rem;
  height: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MenuIcon = styled.img`
  width: 1rem;
  height: 1rem;
`;
const Text = styled.div`
  width: 5rem;
  height: 1.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Category(props) {
  return (
    <CategoryBox onClick={props.handleClick}>
      <MenuBox>
        <MenuIcon src={menuimg} />
      </MenuBox>

      <Text>카테고리</Text>
    </CategoryBox>
  );
}
export default Category;
