import { Link } from "react-router-dom";
import styled from "styled-components";
import { categoryFormat } from "assets/CustomName";

const DetailedBox = styled(Link)`
  width: 11rem;
  height: 23rem;
  display: flex;
  flex-direction: column;
  text-decoration: none;
  color: inherit;
`;

const Title = styled.p`
  margin-bottom: 1rem;
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: var(--orange);
  }
  &:active {
    transform: scale(0.95);
  }
`;
const SubCategoty = styled.p`
  font-size: 14px;
  margin-bottom: 12px;
  transition: transform 0.3s ease-in-out;

  &:hover {
    color: var(--orange);
  }
  &:active {
    transform: scale(0.95);
  }
`;

function DetailBox(props) {
  console.log("props: ", props);
  return (
    <DetailedBox
      to={`/user/categories/${categoryFormat(props.content.title, true)}`}
      onClick={props.onClick}
    >
      <Title className="cm-SBold18">{props.content.title} &gt; </Title>

      {props.content.content.map((subcategory) => {
        return (
          <SubCategoty key={subcategory} className="cm-SRegular16 ">
            {subcategory}
          </SubCategoty>
        );
      })}
    </DetailedBox>
  );
}
export default DetailBox;
